import cors from "cors";
import { errorHandler, RabbitMQ, upload } from "devchu-common";
import { rpc } from "devchu-common/configs/rpc";
import dotenv from "dotenv";
import express, { Router } from "express";
import mongoose from "mongoose";
import { ProductMongooseRepository } from "./infras/repository";
import { init, modelName } from "./infras/repository/mongo/dto";
import { RPCBrandRepository, RPCCategoryRepository } from "./infras/rpc";
import { ProductHttpService } from "./infras/transport/express";
import { ProductUseCase } from "./useCase";

dotenv.config();
const app = express();

(async () => {
    // middleware
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    await mongoose.connect(process.env.MONGO_URL || "mongodb://localhost:27017/ecommerce");
    init();

    const messageBroker = new RabbitMQ(process.env.RABBITMQ_URL || "amqp://localhost");
    await messageBroker.connect();

    const repository = new ProductMongooseRepository(mongoose.models[modelName]);
    const rpcCategory = new RPCCategoryRepository(rpc.categoryURL);
    const rpcBrand = new RPCBrandRepository(rpc.brandURL);
    const useCase = new ProductUseCase(repository);
    const httpService = new ProductHttpService(useCase, rpcCategory, rpcBrand);

    const router = Router();

    router.get("/product", httpService.list.bind(httpService));
    router.get("/product/:id", httpService.get.bind(httpService));
    router.post("/product", upload.single("thumbnailUrl"), httpService.create.bind(httpService));
    router.patch("/product/:id", httpService.update.bind(httpService));
    router.delete("/product/:id", httpService.delete.bind(httpService));

    // internal call
    router.get("/rpc/product", httpService.findMany.bind(httpService));

    router.get("/product/health", (req, res) => {
        res.send("Product Service is healthy");
    });

    app.use(router);

    app.use(errorHandler as any);

    app.listen(3004, () => {
        console.log("Product Service is listening on port 3004");
    });
})();

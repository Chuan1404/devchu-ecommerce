import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { ProductController } from './adapter/rest/product.controller';
import { CreateProductHandler } from './application/handlers/create-product.handler';
import { GetProductHandler } from './application/handlers/get-product.handler';
import { ProductRepository } from './infras/repository/product.repository';

@Module({
  imports: [CqrsModule],
  controllers: [ProductController],
  providers: [ProductRepository, CreateProductHandler, GetProductHandler],
})
export class ProductModule {}

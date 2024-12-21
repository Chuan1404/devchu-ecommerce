import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Product } from '../../domain/entities/product.entity';
import { CreateProductCommand } from '../commands/create-product.command';
import { ProductService } from '../services/product.command.service';

@CommandHandler(CreateProductCommand)
export class CreateProductHandler
  implements ICommandHandler<CreateProductCommand>
{
  constructor(private readonly productService: ProductService) {}

  async execute(command: CreateProductCommand): Promise<Product> {
    const { name, price, description } = command;
    const newProduct = new Product(
      Math.random().toString(36).substring(7),
      name,
      price,
      description,
    );
    return this.productService.save(newProduct);
  }
}

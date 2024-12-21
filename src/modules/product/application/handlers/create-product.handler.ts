import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Product } from '../../domain/entities/product.entity';
import { ProductRepository } from '../../infras/repository/product.repository';
import { CreateProductCommand } from '../commands/create-product.command';

@CommandHandler(CreateProductCommand)
export class CreateProductHandler implements ICommandHandler<CreateProductCommand>{
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(command: CreateProductCommand): Promise<Product> {
    const { name, price, description } = command;
    const newProduct = new Product(
      Math.random().toString(36).substring(7),
      name,
      price,
      description,
    );
    return this.productRepository.save(newProduct);
  }
}

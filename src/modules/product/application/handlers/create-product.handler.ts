import { Injectable } from '@nestjs/common';
import { Product } from '../../domain/entities/product.entity';
import { ProductRepository } from '../../infras/repository/product.repository';
import { CreateProductCommand } from '../commands/create-product.command';

@Injectable()
export class CreateProductHandler {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(command: CreateProductCommand): Promise<Product> {
    const { name, price, description } = command;
    const newProduct = new Product(
      Math.random().toString(36).substring(7), // Random ID generation for demo
      name,
      price,
      description,
    );
    return this.productRepository.save(newProduct);
  }
}

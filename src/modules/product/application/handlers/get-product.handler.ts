import { Injectable } from '@nestjs/common';
import { Product } from '../../domain/entities/product.entity';
import { ProductRepository } from '../../infras/repository/product.repository';
import { GetProductQuery } from '../queries/get-product.query';

@Injectable()
export class GetProductHandler {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(query: GetProductQuery): Promise<Product | null> {
    return this.productRepository.findById(query.id);
  }
}

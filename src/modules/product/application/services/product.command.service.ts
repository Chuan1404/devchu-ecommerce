import { Injectable } from '@nestjs/common';
import { Product } from '../../domain/entities/product.entity';
import { ProductRepository } from '../../infras/repository/product.repository';

@Injectable()
export class ProductService {
  constructor(private productRepository: ProductRepository) {}
  create(product: Product): Product {
    this.productRepository.create(product);
    return product;
  }

  findById(id: string): Product | null {
    return this.productRepository.findById(id);
  }
}

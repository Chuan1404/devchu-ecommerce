import { Injectable } from '@nestjs/common';
import { Product } from '../../domain/entities/product.entity';
import { ProductRepository } from '../../infras/repository/product.repository';

@Injectable()
export class ProductService {
  constructor(private productRepository: ProductRepository) {}
  save(product: Product): Product {
    this.productRepository.save(product);
    return product;
  }

  findById(id: string): Product | null {
    return this.productRepository.findById(id);
  }
}

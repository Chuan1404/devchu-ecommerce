import { Injectable } from '@nestjs/common';
import { Product } from '../../domain/entities/product.entity';

@Injectable()
export class ProductRepository {
  private products: Product[] = [];

  save(product: Product): Product {
    this.products.push(product);
    return product;
  }

  findById(id: string): Product | null {
    return this.products.find((product) => product.id === id) || null;
  }
}

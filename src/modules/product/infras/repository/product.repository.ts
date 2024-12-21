import { Injectable } from '@nestjs/common';
import { ICommandRepository, IQueryRepository } from 'src/shared/interfaces';
import { Product } from '../../domain/entities/product.entity';

@Injectable()
export class ProductRepository
  implements IQueryRepository<Product>, ICommandRepository<Product>
{
  create(data: Partial<Product>): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  update(id: string, data: Partial<Product>): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  delete(id: string, isHard: boolean): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  findAll(): Promise<Product[]> {
    throw new Error('Method not implemented.');
  }
  findById(id: string): Promise<Product> {
    throw new Error('Method not implemented.');
  }
  findByCondition(condition: Partial<Product>): Promise<Product> {
    throw new Error('Method not implemented.');
  }
  private products: Product[] = [];
}

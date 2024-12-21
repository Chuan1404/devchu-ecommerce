import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Product } from '../../domain/entities/product.entity';
import { ProductRepository } from '../../infras/repository/product.repository';
import { GetProductQuery } from '../queries/get-product.query';

@QueryHandler(GetProductQuery)
export class GetProductHandler implements IQueryHandler<GetProductQuery> {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(query: GetProductQuery): Promise<Product | null> {
    return this.productRepository.findById(query.id);
  }
}

import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateProductCommand } from '../../application/commands/create-product.command';
import { CreateProductDto } from '../../application/dtos/create-product.dto';
import { GetProductQuery } from '../../application/queries/get-product.query';
import { Product } from '../../domain/entities/product.entity';

@Controller('products')
export class ProductController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    const command = new CreateProductCommand(
      createProductDto.name,
      createProductDto.price,
      createProductDto.description,
    );
    return this.commandBus.execute(command);
  }

  @Get(':id')
  async get(@Param('id') id: string): Promise<Product | null> {
    const query = new GetProductQuery(id);
    return this.queryBus.execute(query);
  }
}

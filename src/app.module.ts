import { Module } from '@nestjs/common';
import { ProductModule } from './modules/product/product.module';

@Module({
  imports: [ProductModule],
  providers: [],
})
export class AppModule {}

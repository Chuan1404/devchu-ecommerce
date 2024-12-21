import { IsInt,  } from 'class-validator';

export class PagingDTO {
  @IsInt()
  limit: number = 10;

  @IsInt()
  page: number = 1;
}

import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsString } from 'class-validator';
import { CreatePizzaDto } from './create-pizza.dto';

export class UpdatePizzaDto extends PartialType(CreatePizzaDto) {
  @IsString()
  imageUrl?: string;

  @IsString()
  title?: string;

  @IsNumber()
  types?: number[];

  @IsNumber()
  size?: number[];

  @IsNumber()
  price?: number;

  @IsString()
  categories?: string;

  @IsNumber()
  rating?: string;
}

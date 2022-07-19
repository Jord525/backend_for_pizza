import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePizzaDto {
  @IsString()
  @IsNotEmpty()
  imageUrl: string;

  @IsString()
  title: string;

  @IsNumber()
  @IsNotEmpty()
  types: number[];

  @IsNumber()
  @IsNotEmpty()
  size: number[];

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  categories: string;

  @IsNotEmpty()
  rating: string;
}

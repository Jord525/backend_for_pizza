import {
  Controller,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Get,
  Query,
} from '@nestjs/common';
import { PizzaService } from './pizza.service';
import { CreatePizzaDto } from './dto/create-pizza.dto';
import { UpdatePizzaDto } from './dto/update-pizza.dto';

@Controller('pizza')
export class PizzaController {
  constructor(private readonly pizzaService: PizzaService) {}

  @Post()
  create(@Body() createPizzaDto: CreatePizzaDto) {
    return this.pizzaService.create(createPizzaDto);
  }

  @Get()
  GetAllPizza() {
    return this.pizzaService.getAllPizza();
  }

  @Get('f')
  FileteredPizza(
    // @Query('sortBy') sortBy: string,
    @Query('order') order: 'asc' | 'desc',
    @Query('category') category: string,
    @Query('search') search: string,
    // @Query('page') page: number,
    // @Query('limit') limit: number,
  ) {
    return this.pizzaService.getSortPizza(order, category, search);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePizzaDto: UpdatePizzaDto) {
    return this.pizzaService.update(+id, updatePizzaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pizzaService.remove(+id);
  }
}

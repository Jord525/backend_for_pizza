import { Module } from '@nestjs/common';
import { PizzaService } from './pizza.service';
import { PizzaController } from './pizza.controller';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [PizzaController],
  providers: [PizzaService, PrismaClient],
})
export class PizzaModule {}

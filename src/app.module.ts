import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PizzaController } from './pizza/pizza.controller';
import { PizzaModule } from './pizza/pizza.module';
import { PizzaService } from './pizza/pizza.service';

@Module({
  imports: [PizzaModule],
  controllers: [PizzaController],
  providers: [PizzaService, PrismaClient],
})
export class AppModule {}

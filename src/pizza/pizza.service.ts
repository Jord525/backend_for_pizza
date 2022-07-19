import { Injectable, Query } from '@nestjs/common';
import { CreatePizzaDto } from './dto/create-pizza.dto';
import { UpdatePizzaDto } from './dto/update-pizza.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PizzaService {
  constructor(private prisma: PrismaClient) {}

  async create(createPizzaDto: CreatePizzaDto) {
    const pizza = await this.prisma.pizza.create({
      data: {
        ...createPizzaDto,
      },
    });
    return pizza;
  }

  async getAllPizza() {
    return await this.prisma.pizza.findMany();
  }

  async getSortPizza(
    order: 'asc' | 'desc',
    // sortBy: string,
    // page: number,
    // limit: number,
    category: string,
    search: string,
  ) {
    const sortPizza = await this.prisma.pizza.findMany({
      orderBy: {
        title: order,
      },
      where: {
        categories: {
          equals: category,
        },
        OR: {
          title: {
            search: search,
          },
        },
      },
    });

    return sortPizza;
  }

  update(id: number, updatePizzaDto: UpdatePizzaDto) {
    return `This action updates a #${id} pizza`;
  }

  remove(id: number) {
    return `This action removes a #${id} piz za`;
  }
}

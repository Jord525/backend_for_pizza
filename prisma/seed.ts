import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function run() {
  const pizza = await prisma.pizza.upsert({
    where: { id: 10 },
    update: {},
    create: {
      imageUrl:
        'https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg',
      title: 'ABC',
      types: [0, 1],
      size: [26, 30, 40],
      price: 803,
      categories: '4',
      rating: '4',
    },
  });
  console.log(pizza);
}
run()
  .catch((err) => {
    console.log(err);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

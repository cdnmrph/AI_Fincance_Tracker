import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.services';

@Injectable()
export class TransactionsService {
  constructor(private prisma: PrismaService) {}

  createTransaction(userId: number, amount: number, category: string) {
    return this.prisma.transaction.create({
      data: { userId, amount, category },
    });
  }

  getTransactions(userId: number) {
    return this.prisma.transaction.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  }
}

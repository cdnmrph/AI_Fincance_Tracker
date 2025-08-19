import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TransactionsService } from './transactions.service';

@Controller('transactions')
export class TransactionsController {
  constructor(private txService: TransactionsService) {}

  @Post()
  create(@Body() body: { userId: number; amount: number; category: string }) {
    return this.txService.createTransaction(body.userId, body.amount, body.category);
  }

  @Get(':userId')
  findAll(@Param('userId') userId: string) {
    return this.txService.getTransactions(Number(userId));
  }
}

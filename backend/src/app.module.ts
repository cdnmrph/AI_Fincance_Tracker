import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TransactionsModule } from './transactions/transactions.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [PrismaModule, AuthModule, TransactionsModule, UserModule],
})
export class AppModule {}

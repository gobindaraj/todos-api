import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';

@Module({
  controllers: [TodosController],
  providers: [TodosService, PrismaClient],
})
export class TodosModule {}

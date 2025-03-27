import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthsModule } from './auths/auths.module';
import { TodosModule } from './todos/todos.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ConfigModule.forRoot(), TodosModule, UsersModule, AuthsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PrismaClient } from '@prisma/client';
import { UsersService } from 'src/users/users.service';
import { AuthsController } from './auths.controller';
import { AuthsService } from './auths.service';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '15d' },
    }),
  ],
  controllers: [AuthsController],
  providers: [AuthsService, PrismaClient, UsersService],
})
export class AuthsModule {}

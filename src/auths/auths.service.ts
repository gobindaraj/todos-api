import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaClient } from '@prisma/client';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthsService {
  constructor(
    private readonly prisma: PrismaClient,
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}
  async register(registerDto: RegisterDto) {
    const user = await this.usersService.create(registerDto);
    const token = await this.jwtService.signAsync(user);
    return { token };
  }
}

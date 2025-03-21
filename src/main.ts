import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  //application instance is created here
  const app = await NestFactory.create(AppModule);
  //midelware is applied here
  app.useGlobalPipes(new ValidationPipe());//use keyword use vako xa vane tyo middel were ho. 

  //app start here
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

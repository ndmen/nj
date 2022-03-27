import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerMiddleware } from './_middlewares/logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  //Not work(We don't use functional middleware)
  app.use(LoggerMiddleware);
  app.useGlobalPipes(new ValidationPipe)
}
bootstrap();

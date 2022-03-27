import { ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerMiddleware } from './_middlewares/logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  //Not work(We don't use functional middleware)
  app.use(LoggerMiddleware);
  app.useGlobalPipes(new ValidationPipe({
    disableErrorMessages: true, //Disable error messages
    whitelist: true, //Delete params, where not validation decorators in class validator
    transform: true, //Activate auto transform
  }));
  app.enableVersioning({
    type: VersioningType.URI,
  });
}
bootstrap();

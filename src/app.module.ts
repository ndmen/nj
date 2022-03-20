import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware } from './_middlewares/logger.middleware';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TigersModule } from './tigers/tigers.module';
import { CatsModule } from './cats/cats.module';
import { DogsModule } from './dogs/dogs.module';
import { LionsModule } from './lions/lions.module';
import { OwlsModule } from './owls/owls.module';


@Module({
  imports: [ DogsModule, TigersModule, CatsModule, LionsModule, OwlsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(LoggerMiddleware)
    .forRoutes('lions');
  }
}

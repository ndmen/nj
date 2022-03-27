import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { LoggerMiddleware } from './_middlewares/logger.middleware';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TigersModule } from './tigers/tigers.module';
import { CatsModule } from './cats/cats.module';
import { DogsModule } from './dogs/dogs.module';
import { LionsModule } from './lions/lions.module';
import { OwlsModule } from './owls/owls.module';
import { LionsController } from './lions/lions.controller';
import { ConfigModule } from '@nestjs/config';
import configuration from './configs/configuration';


@Module({
  imports: [ DogsModule, TigersModule, CatsModule, LionsModule, OwlsModule, ConfigModule.forRoot({envFilePath: ['.env', '.env.development'], load: [configuration]})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(LoggerMiddleware)
    .exclude(
      { path: 'owls', method: RequestMethod.GET },
      { path: 'owls', method: RequestMethod.PUT },
      'cats/(.*)',
    )
    .forRoutes(LionsController);
  }
}

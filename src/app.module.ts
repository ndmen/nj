import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TigersModule } from './tigers/tigers.module';
import { CatsModule } from './cats/cats.module';
import { DogsModule } from './dogs/dogs.module';

@Module({
  imports: [ DogsModule, TigersModule, CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

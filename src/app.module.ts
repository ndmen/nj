import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LionsService } from './lions/lions.service';
import { TigersModule } from './tigers/tigers.module';
import { CatsModule } from './cats/cats.module';
import { DogsModule } from './dogs/dogs.module';
import { lionsController } from './lions/lions.controller';
import { OwlsController } from './owls/owls.controller';
import { OwlsService } from './owls/owls.service';

@Module({
  imports: [ DogsModule, TigersModule, CatsModule],
  controllers: [AppController, OwlsController, lionsController],
  providers: [AppService, OwlsService, LionsService],
})
export class AppModule {}

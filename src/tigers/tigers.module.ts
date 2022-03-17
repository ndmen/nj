import { Module } from '@nestjs/common';
import { TigersService } from './tigers.service';
import { TigersController } from './tigers.controller';

@Module({
  controllers: [TigersController],
  providers: [TigersService]
})
export class TigersModule {}

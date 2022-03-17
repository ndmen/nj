import { Test, TestingModule } from '@nestjs/testing';
import { TigersController } from './tigers.controller';
import { TigersService } from './tigers.service';

describe('TigersController', () => {
  let controller: TigersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TigersController],
      providers: [TigersService],
    }).compile();

    controller = module.get<TigersController>(TigersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

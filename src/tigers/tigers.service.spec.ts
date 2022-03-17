import { Test, TestingModule } from '@nestjs/testing';
import { TigersService } from './tigers.service';

describe('TigersService', () => {
  let service: TigersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TigersService],
    }).compile();

    service = module.get<TigersService>(TigersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

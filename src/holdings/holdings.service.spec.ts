import { Test, TestingModule } from '@nestjs/testing';
import { HoldingsService } from './holdings.service';

describe('HoldingsService', () => {
  let service: HoldingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HoldingsService],
    }).compile();

    service = module.get<HoldingsService>(HoldingsService);
  });

  it('holdings service should be defined', () => {
    expect(service).toBeDefined();
  });
});
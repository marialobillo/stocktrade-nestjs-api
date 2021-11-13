import { Test, TestingModule } from '@nestjs/testing';
import { CompaniesController } from './companies.controller';
import { CompaniesService } from './companies.service';
import { Company } from './company.entity';


jest.mock('./space-ship.service');

describe('Companies Controller', () => {
  let controller: CompaniesController;
  let service: CompaniesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompaniesController],
      providers: [CompaniesService],
    }).compile();

    controller = module.get<CompaniesController>(CompaniesController);
    service = module.get<CompaniesService>(CompaniesService);
  });

  it('should call the Service', () => {
    const company: Company = {
      'id': '1be20d44-9bb1-4efc-aea8-50c63eb67ab1',
      'name': 'EBYY Inc.',
      'symbol': 'EBY',
    };

    controller.createCompany(company);

    expect(service.createCompany).toHaveBeenCalledWith(company);
  });


  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
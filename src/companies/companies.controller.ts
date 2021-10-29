import { CompaniesService } from './companies.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { Company } from './company.model';

@Controller('companies')
export class CompaniesController {
  constructor(private companiesService: CompaniesService) {}

  @Get()
  getAllCompanies(): Company[] {
    return this.companiesService.getAllCompanies();
  }

  @Post()
  createCompany(
    @Body('name') name: string, 
    @Body('symbol') symbol: string,
  ): Company {
    return this.companiesService.createCompany(name, symbol);
  }
}

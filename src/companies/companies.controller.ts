import { CompaniesService } from './companies.service';
import { Controller, Get } from '@nestjs/common';
import { Company } from './company.model';

@Controller('companies')
export class CompaniesController {
    constructor(private companiesService: CompaniesService){}

    @Get()
    getAllCompanies(): Company[] {
      return this.companiesService.getAllCompanies();
    }

    
}

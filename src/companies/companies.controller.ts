import { CompaniesService } from './companies.service';
import { Controller, Get } from '@nestjs/common';

@Controller('companies')
export class CompaniesController {
    constructor(private companiesService: CompaniesService){}

    @Get()
    getAllCompanies(){
        return this.companiesService.getAllCompanies();
    }

    
}

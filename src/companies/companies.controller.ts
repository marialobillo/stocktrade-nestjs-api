import { CreateCompanyDto } from './dto/create-company.dto';
import { CompaniesService } from './companies.service';
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
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
   @Body() createCompanyDto: CreateCompanyDto
  ): Company {
    return this.companiesService.createCompany(createCompanyDto);
  }

  @Get('/:id')
  getCompanyById(@Param('id') id: string): Company{
    return this.companiesService.getCompanyById(id);
  }

  @Delete('/:id')
  deleteCompany(@Param('id') id: string): void {
    return this.companiesService.deleteCompany(id);
  }

  @Patch('/:id/name')
  udpateCompanyName(
    @Param('id') id: string, 
    @Body('name') name: string,
  ): Company {
    return this.companiesService.updateCompanyName(id, name);
  }
}

import { UpdateCompanyNameDto } from './dto/update-company-name.dto';
import { GetCompanyFilterDto } from './dto/get-company-filter.dto';
import { CreateCompanyDto } from './dto/create-company.dto';
import { CompaniesService } from './companies.service';
import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { Company } from './company.entity';

@Controller('companies')
export class CompaniesController {
  constructor(private companiesService: CompaniesService) {}

  // @Get()
  // getCompanies(@Query() filterDto: GetCompanyFilterDto): Company[] {

  //   if(Object.keys(filterDto).length){
  //     return this.companiesService.getCompaniesWithFilters(filterDto);
  //   } else {
  //     return this.companiesService.getAllCompanies();
  //   }
  // }

  // @Post()
  // createCompany(
  //  @Body() createCompanyDto: CreateCompanyDto
  // ): Company {
  //   return this.companiesService.createCompany(createCompanyDto);
  // }

  @Get('/:id')
  getCompanyById(@Param('id') id: string): Promise<Company> {
    return this.companiesService.getCompanyById(id);
  } 

  // @Delete('/:id')
  // deleteCompany(@Param('id') id: string): void {
  //   return this.companiesService.deleteCompany(id);
  // }

  // @Patch('/:id/name')
  // udpateCompanyName(
  //   @Param('id') id: string, 
  //   @Body() updateCompanyNameDto: UpdateCompanyNameDto,
  // ): Company {
  //   const { name } = updateCompanyNameDto;
  //   return this.companiesService.updateCompanyName(id, name);
  // }
}

import { CompaniesRepository } from './companies.repository';
import { GetCompanyFilterDto } from './dto/get-company-filter.dto';
import { CreateCompanyDto } from './dto/create-company.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from './company.entity';
import { filter } from 'rxjs';

@Injectable()
export class CompaniesService {

  constructor(
    @InjectRepository(CompaniesRepository)
    private companiesRepository: CompaniesRepository,
  ){}


  getCompanies(filterDto: GetCompanyFilterDto): Promise<Company[]> {
    return this.companiesRepository.getCompanies(filterDto);
  }


  async getCompanyById(id: string): Promise<Company> {

    const company = await this.companiesRepository.findOne(id);

    if(!company){
      throw new NotFoundException(`Company with ID "${id}" not found.`);
    }
    return company;
  }

  createCompany(createCompanyDto: CreateCompanyDto): Promise<Company> {
    return this.companiesRepository.createCompany(createCompanyDto);
  }

  async deleteCompany(id: string): Promise<void> {
    const result = await this.companiesRepository.delete(id);
    if(result.affected === 0){
      throw new NotFoundException(`Company with ID "${id}" not found.`);
    }
  }

  async updateCompanyName(id: string, name: string): Promise<Company> {
    const company = await this.getCompanyById(id);
    company.name = name;
    await this.companiesRepository.save(company);
    return company;
  }
}

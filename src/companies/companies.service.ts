import { CompaniesRepository } from './companies.repository';
import { GetCompanyFilterDto } from './dto/get-company-filter.dto';
import { CreateCompanyDto } from './dto/create-company.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from './company.entity';

@Injectable()
export class CompaniesService {

  constructor(
    @InjectRepository(CompaniesRepository)
    private companiesRepository: CompaniesRepository,
  ){}

  // getAllCompanies(): Company[] {
  //   return this.companies;
  // }

  // getCompaniesWithFilters(filterDto: GetCompanyFilterDto): Company[] {
  //   const { name, search } = filterDto;

  //   let companies = this.getAllCompanies();

  //   // do with name
  //   if(name){
  //     companies = companies.filter(company => company.name === name);
  //   }

  //   // do with search
  //   if(search){
  //     companies = companies.filter(company => {
  //       if(company.name.includes(search) || company.symbol.includes(search)){
  //         return true;
  //       }
  //       return false;
  //     });
  //   }

  //   // return result
  //   return companies;
  // }

  // createCompany(createCompanyDto: CreateCompanyDto): Company {
  //   const { name, symbol } = createCompanyDto;
  //   const company: Company = {
  //     id: uuid(),
  //     name,
  //     symbol,
  //   };

  //   this.companies.push(company);
  //   return company;
  // }

  async getCompanyById(id: string): Promise<Company> {

    const company = await this.companiesRepository.findOne(id);

    if(!company){
      throw new NotFoundException(`Company with ID "${id}" not found.`);
    }
    return company;
  }

  // deleteCompany(id: string): void {
  //   const found = this.getCompanyById(id);
  //   this.companies = this.companies.filter(company => company.id !== found.id);
  // }

  // updateCompanyName(id: string, name: string): Company {
  //   const company = this.getCompanyById(id);
  //   company.name = name;
  //   return company;
  // }
}

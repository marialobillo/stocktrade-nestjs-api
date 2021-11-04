import { CreateCompanyDto } from './dto/create-company.dto';
import { Injectable } from '@nestjs/common';
import { Company } from './company.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CompaniesService {
  private companies: Company[] = [];

  getAllCompanies(): Company[] {
    return this.companies;
  }

  createCompany(createCompanyDto: CreateCompanyDto): Company {
    const { name, symbol } = createCompanyDto;
    const company: Company = {
      id: uuid(),
      name,
      symbol,
    };

    this.companies.push(company);
    return company;
  }

  getCompanyById(id: string): Company {
    return this.companies.find((company) => company.id === id);
  }

  deleteCompany(id: string): void {
    this.companies = this.companies.filter(company => company.id !== id);
  }

  updateCompanyName(id: string, name: string): Company {
    const company = this.getCompanyById(id);
    company.name = name;
    return company;
  }
}

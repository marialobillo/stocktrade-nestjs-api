import { Injectable } from '@nestjs/common';
import { Company } from './company.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CompaniesService {
  private companies: Company[] = [];

  getAllCompanies(): Company[] {
    return this.companies;
  }

  createCompany(name: string, symbol: string): Company {
    const company: Company = {
      id: uuid(),
      name,
      symbol,
    };

    this.companies.push(company);

    return company;
  }
}

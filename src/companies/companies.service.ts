import { Injectable } from '@nestjs/common';
import { Company } from './company.model';

@Injectable()
export class CompaniesService {
    private companies: Company[] = [];

    getAllCompanies(): Company[]{
      return this.companies;
    }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class CompaniesService {
    private companies = [];

    getAllCompanies(){
        return this.companies;
    }
}

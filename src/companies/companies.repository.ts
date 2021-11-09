import { CreateCompanyDto } from './dto/create-company.dto';
import { EntityRepository, Repository } from "typeorm";
import { Company } from "./company.entity";

@EntityRepository(Company)
export class CompaniesRepository extends Repository<Company> {

  async createCompany(createCompanyDto: CreateCompanyDto): Promise<Company> {
    const { name, symbol } = createCompanyDto;

    const company = this.create({
      name, 
      symbol,
    });

    await this.save(company);

    return company;
  }
}


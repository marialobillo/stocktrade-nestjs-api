import { CreateCompanyDto } from './dto/create-company.dto';
import { EntityRepository, Repository } from "typeorm";
import { Company } from "./company.entity";
import { GetCompanyFilterDto } from './dto/get-company-filter.dto';

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

  async getCompanies(filterDto: GetCompanyFilterDto): Promise<Company[]> {
    const { name, search } = filterDto;

    const query = this.createQueryBuilder('company');

    if(search){
      query.andWhere(
        'LOWER(company.name) LIKE LOWER(:search) OR LOWER(company.symbol) LIKE LOWER(:search)',
        { search: `%${search}%`},
      );
    }

    const companies = await query.getMany();
    return companies;
  }
}


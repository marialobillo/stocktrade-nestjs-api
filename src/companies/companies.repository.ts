import { EntityRepository, Repository } from "typeorm";
import { Company } from "./company.entity";

@EntityRepository(Company)
export class CompaniesRepository extends Repository<Company> {

}


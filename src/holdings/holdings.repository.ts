import { CreateHoldingDto } from './dto/create-holding.dto';
import { EntityRepository, Repository } from "typeorm";
import { Holding } from "./holding.entity";
import { GetHoldingFilterDto } from './dto/get-holding-filter.dto';

@EntityRepository(Holding)
export class HoldingsRepository extends Repository<Holding> {

  async createHolding(createHoldingDto: CreateHoldingDto): Promise<Holding> {
    const { 
      userId, 
      companyId, 
      shares,
      priceBuy,
      dateBuy,
      isActive 
    } = createHoldingDto;

    const holding = this.create({
      userId, 
      companyId, 
      shares,
      priceBuy,
      dateBuy,
      isActive 
    });

    await this.save(holding);

    return holding;
  }

  async getHoldings(filterDto: GetHoldingFilterDto): Promise<Holding[]> {
    const { userId } = filterDto;

    const query = this.createQueryBuilder('holding');

    if(userId){
      query.andWhere(
        'holding.userId = userId',
        { userId: `%${userId}%`},
      );
    }

    const holdings = await query.getMany();
    return holdings;
  }
}


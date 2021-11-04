import { Injectable } from '@nestjs/common';
import { Holding } from './holding.model';
import { v4 as uuid } from 'uuid';
import { CreateHoldingDto } from './dto/create-holding.dto';
@Injectable()
export class HoldingsService {
  private holdings: Holding[] = [];

  getAllHoldings(): Holding[] {
    return this.holdings;
  }

  createHolding(createHoldingDto: CreateHoldingDto): Holding {
    const { companyId, userId, shares, priceBuy } = createHoldingDto;
    const holding: Holding = {
      id: uuid(),
      companyId,
      userId,
      shares,
      priceBuy,
      dateBuy: new Date(),
      isActive: true,
      priceSell: 0,
      dateSell: null,
    };

    this.holdings.push(holding);
    return holding;
  }

  getHoldingById(id: string): Holding {
    return this.holdings.find((holding) => holding.id === id);
  }

  deleteHolding(id: string): void {
    this.holdings = this.holdings.filter(holding => holding.id !== id);
  }
}


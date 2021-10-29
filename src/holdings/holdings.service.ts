import { Injectable } from '@nestjs/common';
import { Holding } from './holding.model';
import { v4 as uuid } from 'uuid';
@Injectable()
export class HoldingsService {
  private holdings: Holding[] = [];

  getAllHoldings(): Holding[] {
    return this.holdings;
  }

  createHolding(companyId: string, shares: number, priceBuy: number): Holding {
    const holding: Holding = {
      id: uuid(),
      companyId,
      shares,
      priceBuy,
      dateBuy: now(),
      isActive: true,
      priceSell: 0,
      dateSell: null,
    };

    this.holdings.push(holding);

    return holding;
  }
}

function now(): Date {
  throw new Error('Function not implemented.');
}

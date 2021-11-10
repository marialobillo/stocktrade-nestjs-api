import { GetHoldingFilterDto } from './dto/get-holding-filter.dto';
import { HoldingsRepository } from './holdings.repository';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Holding } from './holding.model';
import { v4 as uuid } from 'uuid';
import { CreateHoldingDto } from './dto/create-holding.dto';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class HoldingsService {

  constructor(
    @InjectRepository(HoldingsRepository)
    private holdingsRepository: HoldingsRepository,
  ){}

  getHoldings(filterDto: GetHoldingFilterDto): Promise<Holding[]> {
    return this.holdingsRepository.getHoldings(filterDto);
  }

  async getHoldingById(id: string): Promise<Holding> {
    const holding = await this.holdingsRepository.findOne(id);

    if(!holding){
      throw new NotFoundException(`Holding with ID "${id}" not found.`);
    }
    return holding;
  }

  createHolding(createHoldingDto: CreateHoldingDto): Promise<Holding> {
    return this.holdingsRepository.createHolding(createHoldingDto);
  }

  
  // createHolding(createHoldingDto: CreateHoldingDto): Holding {
  //   const { companyId, userId, shares, priceBuy } = createHoldingDto;
  //   const holding: Holding = {
  //     id: uuid(),
  //     companyId,
  //     userId,
  //     shares,
  //     priceBuy,
  //     dateBuy: new Date(),
  //     isActive: true,
  //     priceSell: 0,
  //     dateSell: null,
  //   };

  //   this.holdings.push(holding);
  //   return holding;
  // }

  // getHoldingById(id: string): Holding {
  //   return this.holdings.find((holding) => holding.id === id);
  // }

  // deleteHolding(id: string): void {
  //   this.holdings = this.holdings.filter(holding => holding.id !== id);
  // }
}


import { Controller, Get, Post, Body, Param, Delete, Query } from '@nestjs/common';
import { CreateHoldingDto } from './dto/create-holding.dto';
import { GetHoldingFilterDto } from './dto/get-holding-filter.dto';
import { Holding } from './holding.model';
import { HoldingsService } from './holdings.service';

@Controller('holdings')
export class HoldingsController {
    constructor(private holdingsService: HoldingsService){}

    @Get()
    getHoldings(@Query() filterDto: GetHoldingFilterDto): Promise<Holding[]> {
        return this.holdingsService.getHoldings(filterDto);
    }

    @Post()
    createHolding(
     @Body() createHoldingDto: CreateHoldingDto
    ): Holding {
      return this.holdingsService.createHolding(createHoldingDto);
    }

    @Get('/:id')
    getHoldingById(@Param('id') id: string): Holding {
      return this.holdingsService.getHoldingById(id);
    }

    @Delete('/:id')
    deleteHolding(@Param('id') id: string): void {
      return this.holdingsService.deleteHolding(id);
    }
}

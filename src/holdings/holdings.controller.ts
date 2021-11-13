import { Controller, Get, Post, Body, Param, Delete, Query, Patch } from '@nestjs/common';
import { CreateHoldingDto } from './dto/create-holding.dto';
import { GetHoldingFilterDto } from './dto/get-holding-filter.dto';
import { UpdateHoldingDto } from './dto/update-holding.dto';
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
    ): Promise<Holding> {
      return this.holdingsService.createHolding(createHoldingDto);
    }

    @Get('/:id')
    getHoldingById(@Param('id') id: string): Promise<Holding> {
      return this.holdingsService.getHoldingById(id);
    }

    @Delete('/:id')
    deleteHolding(@Param('id') id: string): Promise<void> {
      return this.holdingsService.deleteHolding(id);
    }

    @Patch('/:id')
    updateHolding(
      @Param('id') id: string,
      @Body() updateHoldingDto: UpdateHoldingDto,
    ): Promise<Holding> {
      const { priceSell, dateSell } = updateHoldingDto;
      return this.holdingsService.updateHolding(id);
    }
}

import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CreateHoldingDto } from './dto/create-holding.dto';
import { Holding } from './holding.model';
import { HoldingsService } from './holdings.service';

@Controller('holdings')
export class HoldingsController {
    constructor(private holdingsService: HoldingsService){}

    @Get()
    getAllHoldings(): Holding[] {
        return this.holdingsService.getAllHoldings();
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

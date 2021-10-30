import { Controller, Get, Post, Body } from '@nestjs/common';
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
}

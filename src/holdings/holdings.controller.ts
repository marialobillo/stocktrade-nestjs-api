import { Controller, Get } from '@nestjs/common';
import { Holding } from './holding.model';
import { HoldingsService } from './holdings.service';

@Controller('holdings')
export class HoldingsController {

    constructor(private holdingsService: HoldingsService){}

    @Get()
    getAllHoldings(): Holding[] {
        return this.holdingsService.getAllHoldings();
    }
}

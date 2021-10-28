import { Controller, Get } from '@nestjs/common';
import { HoldingsService } from './holdings.service';

@Controller('holdings')
export class HoldingsController {

    constructor(private holdingsService: HoldingsService){}

    @Get()
    getAllHoldings(){
        return this.holdingsService.getAllHoldings();
    }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class HoldingsService {

    private holdings = [];

    getAllHoldings(){
        return this.holdings;
    }
}

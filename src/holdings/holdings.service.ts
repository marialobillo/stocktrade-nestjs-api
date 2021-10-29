import { Injectable } from '@nestjs/common';
import { Holding } from './holding.model';

@Injectable()
export class HoldingsService {

    private holdings: Holding[]  = [];

    getAllHoldings(): Holding{
        return this.holdings;
    }
}

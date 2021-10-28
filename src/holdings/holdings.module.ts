import { Module } from '@nestjs/common';
import { HoldingsController } from './holdings.controller';
import { HoldingsService } from './holdings.service';

@Module({
  controllers: [HoldingsController],
  providers: [HoldingsService],
})
export class HoldingsModule {}

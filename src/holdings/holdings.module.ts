import { Module } from '@nestjs/common';
import { HoldingsController } from './holdings.controller';

@Module({
  controllers: [HoldingsController]
})
export class HoldingsModule {}

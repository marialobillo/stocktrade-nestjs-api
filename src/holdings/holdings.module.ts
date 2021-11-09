import { Module } from '@nestjs/common';
import { HoldingsController } from './holdings.controller';
import { HoldingsService } from './holdings.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [HoldingsController],
  providers: [HoldingsService],
})
export class HoldingsModule {}

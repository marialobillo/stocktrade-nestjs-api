import { Module } from '@nestjs/common';
import { HoldingsController } from './holdings.controller';
import { HoldingsService } from './holdings.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HoldingsRepository } from './holdings.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([HoldingsRepository]),
  ],
  controllers: [HoldingsController],
  providers: [HoldingsService],
})
export class HoldingsModule {}

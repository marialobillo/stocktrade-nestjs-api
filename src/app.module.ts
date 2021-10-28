import { Module } from '@nestjs/common';
import { CompaniesModule } from './companies/companies.module';
import { HoldingsModule } from './holdings/holdings.module';

@Module({
  imports: [CompaniesModule, HoldingsModule],
})
export class AppModule {}

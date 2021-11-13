import { Module } from '@nestjs/common';
import { CompaniesModule } from './companies/companies.module';
import { HoldingsModule } from './holdings/holdings.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    CompaniesModule, 
    HoldingsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: 'postgres',
      database: 'stocktrade-db',
      autoLoadEntities: true,
      synchronize: true
    }),
    AuthModule
  ],
})
export class AppModule {}

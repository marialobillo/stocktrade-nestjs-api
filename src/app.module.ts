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
      port: 5432,
      username: 'postgres',
      password: '',
      database: 'stocktrade-db-dev',
      autoLoadEntities: true,
      synchronize: true
    }),
    AuthModule
  ],
})
export class AppModule {}

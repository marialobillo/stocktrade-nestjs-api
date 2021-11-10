import { IsNotEmpty } from 'class-validator';
export class UpdateCompanyNameDto{
  @IsNotEmpty()
  priceSell: number;

  @IsNotEmpty()
  dateSell: Date;
}
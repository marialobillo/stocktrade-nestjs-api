import { IsNotEmpty } from 'class-validator';
export class UpdateHoldingDto{
  @IsNotEmpty()
  priceSell: number;

  @IsNotEmpty()
  dateSell: Date;
}
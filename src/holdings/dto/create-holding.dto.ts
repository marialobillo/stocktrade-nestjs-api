export class CreateHoldingDto {
  companyId: string;
  userId: string;
  shares: number;
  priceBuy: number;
  priceSell: number;
  dateBuy: Date;
  dateSell: Date;
  isActive: boolean;
}
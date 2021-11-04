import { IsNotEmpty } from 'class-validator';
export class UpdateCompanyNameDto{
  @IsNotEmpty()
  name: string;
}
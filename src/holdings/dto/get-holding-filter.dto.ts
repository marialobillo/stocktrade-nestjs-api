import { IsOptional, IsString } from "class-validator";

export class GetHoldingFilterDto {

  @IsString()
  userId?: string;
}
import { IsOptional, IsString } from "class-validator";

export class GetCompanyFilterDto {
  @IsOptional()
  @IsString()
  userId?: string;

  @IsOptional()
  @IsString()
  search?: string;
}
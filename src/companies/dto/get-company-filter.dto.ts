import { IsOptional, IsString } from "class-validator";

export class GetCompanyFilterDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  search?: string;
}
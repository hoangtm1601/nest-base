import { IsBoolean, IsNotEmpty, IsOptional, Length } from 'class-validator'

export class UpdateUserDto {
  @IsOptional()
  firstName: string
  
  @IsOptional()
  lastName: string
  
  @IsOptional()
  @IsNotEmpty()
  @Length(8, 24)
  password: string
  
  @IsOptional()
  @IsBoolean()
  isActive: boolean
}
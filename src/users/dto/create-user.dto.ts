import { IsBoolean, IsNotEmpty, Length } from 'class-validator'
import { ConfigService } from '@nestjs/config'

export class CreateUserDto {
  constructor(private readonly configService: ConfigService) {
  }
  @IsNotEmpty()
  firstName: string
  
  @IsNotEmpty()
  lastName: string
  
  @IsNotEmpty()
  @Length(8, 24)
  password: string
  
  @IsNotEmpty()
  @IsBoolean()
  isActive: boolean
}

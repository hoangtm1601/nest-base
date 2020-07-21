import { IsBoolean, IsEmail, IsNotEmpty, Length } from 'class-validator'

export class CreateUserDto {
  @IsNotEmpty()
  @IsEmail()
  email: string

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

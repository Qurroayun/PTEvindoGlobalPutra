import { IsEmail, IsString, IsNotEmpty, MinLength, MaxLength } from 'class-validator'

export class RegisterDto {

  @IsEmail()
  @IsNotEmpty()
  @IsString()
  email: string

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(18)
  password: string

  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  name: string
}
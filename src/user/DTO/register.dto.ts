import { IsEmail, IsString, IsNotEmpty, MinLength, MaxLength, IsEnum } from 'class-validator'
import { Role } from '@prisma/client';

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

  @IsEnum(Role)
  role : Role;

}
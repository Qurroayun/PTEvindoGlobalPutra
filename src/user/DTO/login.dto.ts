import { IsString, IsNotEmpty, IsEmail, MinLength, MaxLength } from "class-validator";

export class LoginDto {
  @IsEmail()
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(18)
  password: string;
}
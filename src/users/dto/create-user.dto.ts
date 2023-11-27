import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'Name cannot be empty!' })
  name: string;

  @IsEmail(undefined, { message: 'Email not available!' })
  @IsNotEmpty({ message: 'Email cannot be empty!' })
  email: string;

  @MinLength(8, { message: 'Password cannot be less than 8 characters!' })
  @IsNotEmpty({ message: 'Password cannot be empty!' })
  password: string;
}

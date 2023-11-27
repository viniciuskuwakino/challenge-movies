import { IsEmail, IsNotEmpty } from "class-validator";

export class AuthDTO {
    @IsEmail(undefined, { message: 'Invalid email!' })
    email:string

    @IsNotEmpty({ message: 'Password cannot be empty' })
    password: string
}

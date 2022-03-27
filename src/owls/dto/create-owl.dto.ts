import { IsEmail, IsNotEmpty } from 'class-validator';
export class CreateOwlDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    age: number;

    @IsEmail()
    breed: string;
}
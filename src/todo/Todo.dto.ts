import { IsString,IsNotEmpty  } from "class-validator"

export class TodoDTO{
    @IsString()
    @IsNotEmpty()
    title:string

    @IsString()
    description:string
}
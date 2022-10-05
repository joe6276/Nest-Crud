import { IsString } from "class-validator"

export class TodoDTO{
    @IsString()
    title:string

    @IsString()
    description:string
}
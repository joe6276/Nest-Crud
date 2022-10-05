import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { TodoDTO } from './Todo.dto';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {

    constructor(private todoService:TodoService){}
    @Get()
    getTodos(){
        return this.todoService.getTodos()
    }

    @Post()
    @UsePipes(ValidationPipe)
    createTodo(@Body() body:TodoDTO){
       return  this.todoService.createTodo(body)
    }

    @Get('/:id')
    async getTodo(@Param('id') id:string){
        const todo= await this.todoService.getTodo(id)
        if(!todo){
         throw new NotFoundException('Todo Not Found')
        }
        return todo
    }

    @Patch('/:id')
    @UsePipes(ValidationPipe)
    async updatetodo(@Body() body: TodoDTO, @Param('id') id:string){
        await this.getTodo(id)
        return this.todoService.updateTodo(id, body)
    }

    @Delete('/:id')
   async deleteTodo(@Param('id') id:string){
        await this.getTodo(id)
        return this.todoService.deleteTodo(id)
    }
}

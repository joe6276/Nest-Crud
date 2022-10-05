import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post } from '@nestjs/common';
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
    createTodo(@Body() body:TodoDTO){
       return  this.todoService.createTodo(body)
    }

    @Get('/:id')
    getTodo(@Param('id') id:string){
        const todo= this.todoService.getTodo(id)
        if(!todo){
         throw new NotFoundException()
        }
        return todo
    }

    @Patch('/:id')
    updatetodo(@Body() body: TodoDTO, @Param('id') id:string){
        return this.todoService.updateTodo(id, body)
    }

    @Delete('/:id')
    deleteTodo(@Param('id') id:string){
        return this.todoService.deleteTodo(id)
    }
}

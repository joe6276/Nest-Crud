import { Body, Injectable } from "@nestjs/common";
import { TodoDTO } from "./Todo.dto";
import { TodoRepository } from "./todo.repository";


@Injectable()
export class TodoService{
    constructor(private todoRepo:TodoRepository){}
    getTodos(){
    return this.todoRepo.getTodos()
    }
    createTodo(todo:TodoDTO){
        return this.todoRepo.createTodo(todo)
    }
    getTodo(id:string){
        return this.todoRepo.getTodo(id)
    }
    updateTodo(id:string, updateTodo:TodoDTO){
            return this.todoRepo.updateTodo(id,updateTodo)
    }
    deleteTodo(id:string){
        return this.todoRepo.deleteTodo(id)
    }
}
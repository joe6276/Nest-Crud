import { readFile,writeFile } from "fs/promises";
import { TodoDTO } from "./Todo.dto";

export class TodoRepository{

    async getTodos(){
        const contents = await readFile('todo.json', 'utf8')
        const todos = JSON.parse(contents)
        return todos
    }

    async createTodo(todo:TodoDTO){
        const id = Math.floor(Math.random()*999)
        const contents = await readFile('todo.json', 'utf8')
        const todos = JSON.parse(contents)
        todos[id]= {id, ...todo}
        await writeFile('todo.json', JSON.stringify(todos))
        return {message:'Todo Created'}
    }

    async getTodo(id:string){
       const contents = await readFile('todo.json', 'utf8')
       const todos = JSON.parse(contents)
       return todos[id]
    }

    async updateTodo(id:string, updatedTodo:TodoDTO){
    const contents = await readFile('todo.json', 'utf8')
    const todos = JSON.parse(contents)
    todos[id]={id ,...updatedTodo}
    await writeFile('todo.json', JSON.stringify(todos))
    return {message:'Todo Updated'}
    }

    async deleteTodo(id:string){
    const contents = await readFile('todo.json', 'utf8')
    let todos = JSON.parse(contents)
    delete todos[id]
    await writeFile('todo.json', JSON.stringify(todos))
    return {message:'Todo Deleted'}
    }
}
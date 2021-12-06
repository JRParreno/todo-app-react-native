import { Todo } from "../../models/Todo";
import { ADD_TODO, DELETE_TODO } from "./types";

export type addTodoType = {
    type: typeof ADD_TODO,
    payload: Array<Todo>
}


export type deleteTodoType = {
    type: typeof DELETE_TODO,
    payload: { index: number }
}

export type ITodoActions = addTodoType | deleteTodoType;
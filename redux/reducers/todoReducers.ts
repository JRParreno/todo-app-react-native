import { Todo } from "../../models/Todo";
import { addTodoType, ITodoActions } from "../actions/todo";
import { ADD_TODO, DELETE_TODO } from "../actions/types";


export function addTodo(todos: todoState['todoList']): addTodoType {
    return {
        type: ADD_TODO,
        payload: todos
    }
}


export function deleteTodo(todos: todoState['todoList']): addTodoType {
    return {
        type: ADD_TODO,
        payload: todos
    }
}

export interface todoState {
    todoList: Array<Todo>,
}


const initialState: todoState = {
    todoList: []
}


export const todoReducer = (state = initialState, action: ITodoActions) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todoList: state.todoList.concat(action.payload)
            };
        case DELETE_TODO:
            return;
        default:
            return state;
    }
}
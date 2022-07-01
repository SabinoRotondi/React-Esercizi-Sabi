import { combineReducers, createStore } from "redux";
import { CounterReducer } from "./CounterState";
import { todosReducer } from "./TodoState";


//esercizio 4
const rootReducer = combineReducers({
    counter: CounterReducer,
    todos: todosReducer
})

export const store = createStore(rootReducer)
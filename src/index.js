import { decrementCounter, incrementCounter, resetCounter } from "./state/CounterState";
import { store } from './state/Store';
import { addTodo, removeTodo, editTodo, clearTodos } from './state/TodoState';

//esercizio 5
store.subscribe(() => {
    console.log(store.getState())
})

// esercizio 1
store.dispatch(incrementCounter(6))
store.dispatch(decrementCounter(2))
store.dispatch(resetCounter())

// esercizio 3

store.dispatch(addTodo({ id: 1, title: 'Studiare', completed: true }));
store.dispatch(addTodo({ id: 2, title: 'Uscire', completed: true }));
store.dispatch(addTodo({ id: 3, title: 'Mangiare', completed: true }));
store.dispatch(addTodo({ id: 4, title: 'Giocare', completed: false }));
store.dispatch(removeTodo(3));
store.dispatch(editTodo(4, {title: 'Doccia', completed: true}));
store.dispatch(clearTodos());
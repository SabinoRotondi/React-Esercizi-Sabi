const defaultState = [];
const ADD = 'TODO@ADD';
const REMOVE = 'TODO@REMOVE';
const EDIT = 'TODO@EDIT';
const CLEAR = 'TODO@CLEAR';
export const addTodo = (todo) => {
    return { type: ADD, payload: todo };
};
export const removeTodo = (id) => {
    return { type: REMOVE, payload: id };
};
export const editTodo = (id, data) => {

    return { type: EDIT, payload: { id, data } }
}
export const clearTodos = () => {
    return { type: CLEAR }
}
export const todosReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD: {
            return [...state, action.payload]
        }
        case REMOVE: {
            return state.filter((item) => item.id !== action.payload)
        }
        case EDIT: {
            return state.map((item) => {
                if (item.id === action.payload.id) {
                    return { ...item, ...action.payload.data }
                }
                return item
            })
        }
        case CLEAR: {
            return defaultState
        }

        default: {
            return state
        }
    }
}
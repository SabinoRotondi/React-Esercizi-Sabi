const defaultState = 0;

const INCREMENT = 'COUNTER@INCREMENT';
const DECREMENT = 'COUNTER@DECREMENT';
const RESET = 'COUNTER@RESET';
export const incrementCounter = (by = 1) => {
    return { type: INCREMENT, payload: by };
};
export const decrementCounter = (by = 1) => {
    return { type: DECREMENT, payload: by };
};
export const resetCounter = () => {
    return { type: RESET };
};
export const CounterReducer = (state = defaultState, action) => {
    switch (action.type) {
        case INCREMENT: { return state + action.payload; }
        case DECREMENT: { return state - action.payload; }
        case RESET: { return defaultState; }
        default: { return state }
    }
};
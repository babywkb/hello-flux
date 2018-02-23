import CounterDispatcher from './dispatcher';
import ActionTypes from './action-types';

export const increment = event => {
    const value = 1;
    CounterDispatcher.dispatch({
        type: ActionTypes.INCREMENT,
        payload: { value }
    });
};

export const decrement = event => {
    const value = 2;
    CounterDispatcher.dispatch({
        type: ActionTypes.DECREMENT,
        payload: { value }
    });
};

export const reset = event => {
    const value = 0;
    CounterDispatcher.dispatch({
        type: ActionTypes.RESET,
        payload: { value }
    });
}
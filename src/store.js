import { ReduceStore } from 'flux/utils';

import CounterDispatcher from './dispatcher';
import ActionTypes from './action-types';

class CountStore extends ReduceStore {
    getInitialState() {
        return 0;
    }
    reduce(state, { type, payload }) {
        switch (type) {
            case ActionTypes.INCREMENT: {
                const { value } = payload;
                return state + value;
            }
            case ActionTypes.DECREMENT: {
                const { value } = payload;
                return state - value;
            }
            default:
                return state;
        }
    }
}

export const countStore = new CountStore(CounterDispatcher);
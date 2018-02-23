import { ReduceStore } from 'flux/utils';

import AppDispatcher from './dispatcher';
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
            case ActionTypes.RESET: {
                const { value } = payload;
                return value;
            }
            default:
                return state;
        }
    }
}

//履歴用Stoerを作る
class HistoryStore extends ReduceStore {
    getInitialState() {
        return ['アクション名１','アクション名２'];
    }
    reduce(state, { type, payload }) {
        switch (type) {
            case ActionTypes.SHOWHISTORY: {
                const { value } = payload;
                return state.push(value);
            }
            default:
                return state;
        }
    }
}

export const countStore = new CountStore(AppDispatcher);
export const historyStore = new HistoryStore(AppDispatcher);
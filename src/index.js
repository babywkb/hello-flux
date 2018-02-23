import React from 'react';
import ReactDOM from 'react-dom';
import { increment,decrement, reset } from './actions';
import { Container } from 'flux/utils';
import { countStore,historyStore } from './store';

const Counter = ({ count }) => (<h1>{count}</h1>);

const IncButon = () => (
    <div>
        <button onClick={increment}>+1</button>
    </div>
);

const DecButton = () => (
    <div>
        <button onClick={decrement}>-2</button>
    </div>
)

const ResetButton = () => (
    <div>
        <button onClick={reset}>リセットさん！！！</button>
    </div>
)

const ActionHistory = ({history}) => (
    <ul>
            {history.map(hst => (
                <li>
                    <label>
                        {hst}
                    </label>
                </li>
            ))}

    </ul>
)

const App = ({ count, history }) => (
    <div>
        <Counter count={count} />
        <IncButon />
        <DecButton />
        <ResetButton />
        <ActionHistory history={history} />
    </div>
);

const getStores = () => [countStore,historyStore];

const calculateState = () => {
    return { 
        count: countStore.getState(),
        history: historyStore.getState()
    };
};

const AppContainer = Container.createFunctional(App, getStores, calculateState)

ReactDOM.render(<AppContainer />, document.getElementById('root'));
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import RootReducer from './reducers';
import { Provider } from 'react-redux';

const store = createStore(RootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();

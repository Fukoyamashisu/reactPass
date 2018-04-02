import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import 'bootstrap/dist/css/bootstrap.css';

import {Provider} from 'react-redux';
import rootReducers from './reducers/index';
import { createStore} from 'redux';


const store = createStore(rootReducers);


ReactDOM
    .render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root')
    );

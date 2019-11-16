import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { store } from './store/root';

ReactDOM.render(<Provider store={store}>
    <React.Suspense fallback={null}><App /></React.Suspense></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

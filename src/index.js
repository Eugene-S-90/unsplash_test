import "babel-polyfill";
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './index.less';
import App from './App.js';
import { Provider } from 'react-redux'
import store from './redux/store';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom'

ReactDom.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('app')
);
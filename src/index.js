import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from "react-redux";
import {store} from "./store";
import Main from "./components/Main";


ReactDOM.render(
    <Provider store={store}>
        <Main/>
    </Provider>,
    document.getElementById('root')
);

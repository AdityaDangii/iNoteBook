import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './app/store.js';


ReactDOM.render(
<Router>
    <Provider store = {store}>
    <App/>
    </Provider>
</Router>,
document.getElementById('root'));


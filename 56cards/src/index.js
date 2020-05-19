import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home.js'
import Card from './components/card.js'
import Deck from './components/deck.js'
import Login from './components/login.js'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render((
  <Router>
    <div>
    <Route exact path= '/' component = {Home}/>
    <Route exact path = '/play' component = {Deck}/>
    <Route exact path = '/login' component = {Login}/>
    </div>
  </Router>),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

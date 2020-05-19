import React from 'react';


import Home from './components/home.js'
import Card from './components/card.js'
import Deck from './components/deck.js'
import Login from './components/login.js'
import './App.css';

function App() {
  return (
    <div className="App">
        <Home/>
        <Deck/>
        <Card/>
        <Login/>
    </div>
  );
}

export default App;

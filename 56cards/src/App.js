import React from 'react';
import logo from './logo.svg';
import Home from './components/home.js'
import Card from './components/card.js'
import Deck from './components/deck.js'
import './App.css';

function App() {
  return (
    <div className="App">
        <Home/>
        <Deck/>
        <Card/>
    </div>
  );
}

export default App;

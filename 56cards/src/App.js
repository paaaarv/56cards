import React from 'react';
import logo from './logo.svg';
import Card from './components/card.js'
import Deck from './components/deck.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Deck/>
        <Card/>
      </header>
    </div>
  );
}

export default App;

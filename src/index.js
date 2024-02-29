
import React from 'react';
import ReactDOM from 'react-dom/client';
import Game from './game.js';
import './game.css'

function App(){
  return <Game />
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)

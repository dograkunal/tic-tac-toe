import React, {useState} from 'react';
import TicTacToe from "./components/TicTacToe"
import Board from './components/Board';
import './style.css';




export default function App() {
  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <TicTacToe /> 
    </div>
  );
}

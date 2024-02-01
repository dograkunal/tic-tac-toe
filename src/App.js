import React, {useState} from 'react';
import TicTacToe from "./components/TicTacToe"
import './style.css';
import Board from './components/Board';




export default function App() {
  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <TicTacToe />
      <Board />
    </div>
  );
}

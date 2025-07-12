import React, { useState } from 'react';
import SudokuBoard from './components/SudokuBoard';
import { solveSudoku } from './components/Solver';
import './App.css';

const App = () => {
  const emptyBoard = Array(9).fill(null).map(() => Array(9).fill(0));
  const [board, setBoard] = useState(emptyBoard);

  const handleInputChange = (e, row, col) => {
    const value = parseInt(e.target.value) || 0;
    const newBoard = [...board];
    newBoard[row][col] = value;
    setBoard(newBoard);
  };

  const handleSolve = () => {
    const newBoard = board.map(row => [...row]);
    if (solveSudoku(newBoard)) {
      setBoard(newBoard);
    } else {
      alert("❌ No solution found.");
    }
  };

  return (
    <div className="App">
      <h1>🧩 Sudoku Solver</h1>
      <SudokuBoard board={board} handleInputChange={handleInputChange} />
      <button className="solve-button" onClick={handleSolve}>Solve Sudoku</button>
    </div>
  );
};

export default App;

import React from 'react';
import './SudokuBoard.css';

const SudokuBoard = ({ board, handleInputChange }) => {
  return (
    <div className="sudoku-board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="sudoku-row">
          {row.map((cell, colIndex) => (
            <input
              key={`${rowIndex}-${colIndex}`}
              type="number"
              min="1"
              max="9"
              className="sudoku-cell"
              value={cell === 0 ? '' : cell}
              onChange={(e) => handleInputChange(e, rowIndex, colIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default SudokuBoard;

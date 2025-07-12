export const isValid = (board, row, col, num) => {
  for (let x = 0; x < 9; x++) {
    if (board[row][x] === num || board[x][col] === num) return false;

    const startRow = 3 * Math.floor(row / 3) + Math.floor(x / 3);
    const startCol = 3 * Math.floor(col / 3) + x % 3;
    if (board[startRow][startCol] === num) return false;
  }
  return true;
};

export const solveSudoku = (board) => {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0) {
        for (let num = 1; num <= 9; num++) {
          if (isValid(board, row, col, num)) {
            board[row][col] = num;
            if (solveSudoku(board)) return true;
            board[row][col] = 0;
          }
        }
        return false;
      }
    }
  }
  return true;
};

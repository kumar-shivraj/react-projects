import React, { useState, useEffect } from "react";
import "../styles/Board.css";
export default function Board(props) {
  const [board, setBoard] = useState([]);
  const [changeByUser, setChangeByUser] = useState(false);
  const [quickFill, setQuickFill] = useState(false);
  const [createNewTimer, setCreateNewTimer] = useState(true);

  const rows = 80;
  const columns = 35;
  const speed = 500;

  useEffect(() => {
    if (changeByUser) {
      setChangeByUser(false);
      return;
    }
    if (props.running && createNewTimer) {
      setCreateNewTimer(false);
      setTimeout(() => {
        console.log("stepping");
        step();
        setCreateNewTimer(true);
        // }, 1000);
      }, speed);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [board, props.running]);

  function handleKeydown(event) {
    if (event.code === "KeyQ")
      setQuickFill((previousQuickFill) => !previousQuickFill);
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown);
    readyBoard();
  }, []);

  // define the rules
  // based on odd and even numbers....

  function handleMouseOver(event) {
    if (!quickFill) return;
    fill(event);
  }

  /**
   * Fill a cell on the board. Called when the user either clicks a cell
   * or hovers over it while the 'quickFill' feature is enabled.
   * @param {object} event The event that triggered this function.
   */

  function fill(event) {
    setChangeByUser(true);
    const row = event.target.parentElement.id;
    const col = event.target.id;
    const newBoard = [...board];
    newBoard[row][col] = !newBoard[row][col];
    setBoard(newBoard);
  }

  function getNeighbourCount(x, y, referenceBoard) {
    var count = 0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) continue;
        if (isValid(x + i, y + j) && referenceBoard[x + i][y + j] === true)
          count++;
      }
    }
    return count;
  }

  function isValid(a, b) {
    if (a >= 0 && a < columns && b >= 0 && b < rows) return true;
    else return false;
  }

  /**
   * Advances the game board by one step based on Conway's Game of Life rules.
   * Iterates over each cell in the board to determine its next state.
   * A live cell with fewer than 2 or more than 3 live neighbours dies.
   * A dead cell with exactly 3 live neighbours becomes a live cell.
   * The updated board is set as the new state.
   */

  function step() {
    const bufferBoard = [];
    for (let i = 0; i < columns; i++) {
      bufferBoard[i] = [...board[i]];
    }

    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < rows; j++) {
        const neighbours = getNeighbourCount(i, j, board);

        if (board[i][j] === true) {
          // A live cell with fewer than 2 live neighbours will die (underpopulation).
          // A live cell with more than 3 live neighbours will die (overpopulation).
          if (!(neighbours === 2 || neighbours === 3)) {
            bufferBoard[i][j] = false;
          }
        } else if (neighbours === 3) {
          // Any dead cell with exactly 3 live neighbours becomes a live cell as if by reproduction.
          bufferBoard[i][j] = true;
        }
      }
    }
    setBoard(bufferBoard);
  }

  /**
   * Resets the board(2D array) to a blank state. Each cell is set to false (dead).
   */
  function readyBoard() {
    const newBoard = [];
    for (let i = 0; i < columns; i++) {
      const newRow = [];
      for (let j = 0; j < rows; j++) {
        newRow.push(false);
      }
      newBoard.push(newRow);
    }
    setBoard(newBoard);
  }

  return (
    <React.Fragment>
      <div id="board-wrapper">
        {board.map((item, rowIndex) => {
          return (
            <div id={rowIndex} key={rowIndex} className="board-row">
              {item.map((value, colIndex) => {
                return (
                  <div
                    className={value ? "board-visible" : "board-hidden"}
                    id={colIndex}
                    key={colIndex}
                    onClick={fill}
                    onMouseOver={handleMouseOver}
                  ></div>
                );
              })}
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
}

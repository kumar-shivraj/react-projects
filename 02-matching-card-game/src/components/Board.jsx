import React, { useState, useEffect } from "react";
import "../styles/Board.css";
import { Fruits } from "../assets/Fruits";

export default function Board() {
  const [board, setBoard] = useState(
    Array(4)
      .fill(null)
      .map(() => Array(5).fill([" ", 0]))
  );
  const [matched, setMatched] = useState(0);
  const [secondClick, setSecondClick] = useState(false);
  const [previousData, setPreviousData] = useState([]);
  const [time, setTime] = useState();
  const [animate, setAnimate] = useState(
    Array(4)
      .fill(null)
      .map(() => Array(5).fill(false))
  );

  useEffect(() => {
    function setGame() {
      const bufferBoard = board.map((row) => row.map(() => [" ", 0]));
      let fruitCount = Array(5).fill(0);

      while (fruitCount.some((count) => count < 4)) {
        const i = Math.floor(Math.random() * 4);
        const j = Math.floor(Math.random() * 5);
        if (bufferBoard[i][j][0] === " ") {
          const fruitIndex = fruitCount.findIndex((count) => count < 4);
          bufferBoard[i][j][0] = Fruits[fruitIndex];
          fruitCount[fruitIndex]++;
        }
      }

      setBoard(bufferBoard);
      setTime(Date.now());
    }

    setGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (matched === 10) {
      setTimeout(() => {
        const totalTime = (Date.now() - time) / 1000;
        alert(`CONGRATULATIONS, YOU WON! TIME: ${totalTime} SECONDS`);
        window.location.href = "/";
      }, 250);
    }
  }, [matched, time]);

  const handleClick = (rowIndex, colIndex) => {
    const cell = board[rowIndex][colIndex];
    if (cell[1] !== 0) return;

    const newAnimate = animate.map((row) => row.slice());
    newAnimate[rowIndex][colIndex] = true;
    setAnimate(newAnimate);

    // Creates a deep copy of the board state, so we can modify it without changing the original state
    const newBoard = board.map((row) => row.map((cell) => [...cell]));
    newBoard[rowIndex][colIndex][1] = -1;
    setBoard(newBoard);

    if (secondClick) {
      const [prevRow, prevCol] = previousData;
      const prevFruit = board[prevRow][prevCol][0];
      const currentFruit = board[rowIndex][colIndex][0];

      if (prevFruit === currentFruit) {
        setTimeout(() => {
          const updatedBoard = newBoard.map((row) =>
            row.map((cell) => [...cell])
          );
          updatedBoard[prevRow][prevCol][1] = 1;
          updatedBoard[rowIndex][colIndex][1] = 1;
          setBoard(updatedBoard);
          setMatched((prev) => prev + 1);
        }, 250);
      } else {
        setTimeout(() => {
          const updatedBoard = newBoard.map((row) =>
            row.map((cell) => [...cell])
          );
          updatedBoard[prevRow][prevCol][1] = 0;
          updatedBoard[rowIndex][colIndex][1] = 0;
          setBoard(updatedBoard);
        }, 500);
      }
      setPreviousData([]);
    } else {
      setPreviousData([rowIndex, colIndex]);
    }

    setSecondClick((prev) => !prev);
  };

  const getCellClassName = (visibility, isAnimating) => {
    if (visibility === 0) return "row-value-hidden";
    if (visibility === 1) return "row-value-visible";
    return isAnimating
      ? "row-value-focus row-value-hidden-animation"
      : "row-value-focus";
  };

  return (
    <div className="main-wrapper">
      {board.map((row, rowIndex) => (
        <div className="row-wrapper" key={rowIndex}>
          {row.map(([fruit, visibility], colIndex) => {
            return (
              <div
                key={colIndex}
                className={getCellClassName(
                  visibility,
                  animate[rowIndex][colIndex]
                )}
                onClick={() => handleClick(rowIndex, colIndex)}
              >
                {visibility !== 0 ? fruit : ""}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

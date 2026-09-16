import { useState } from "react";

import Board from "./Board";
import History from "./History";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [isNextX, setIsNextX] = useState(true);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];

  function handlePlay(nextSquare) {
    setIsNextX(!isNextX);
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquare];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(move) {
    setCurrentMove(move);
    setIsNextX(move % 2 === 0);
  }

  function handleResetGame() {
    setHistory([Array(9).fill(null)]);
    setIsNextX(true);
    setCurrentMove(0);
  }

  const moves = history.map((squers, move) => {
    let description;
    if (move > 0) {
      description = `Go to the move ${move}`;
    } else {
      description = `Go to start the game`;
    }

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <>
      <div className="flex gap-5 mt-10 justify-center ">
        <div>
          <Board
            square={currentSquares}
            isNextX={isNextX}
            onPlay={handlePlay}
          />
        </div>
        <History moves={moves} />
      </div>
      <button className="bg-red-400 text-center" onClick={handleResetGame}>
        Reset The Game
      </button>
    </>
  );
}

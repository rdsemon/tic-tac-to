import { calculateWinner } from "../calculateWinner";
import Sauare from "./Square";
export default function Board({ square, isNextX, onPlay }) {
  const winner = calculateWinner(square);
  let status;

  if (winner) {
    status = `winner: ${winner}`;
  } else {
    status = `Next player ${isNextX ? "X" : "0"}`;
  }

  function handleClick(i) {
    if (square[i] || calculateWinner(square)) {
      return;
    }
    const nextSquare = square.slice();
    if (isNextX) {
      nextSquare[i] = "X";
    } else {
      nextSquare[i] = "0";
    }

    onPlay(nextSquare);
  }

  return (
    <>
      <p>{status}</p>
      <div className="flex">
        <Sauare value={square[0]} onSquareClick={() => handleClick(0)} />
        <Sauare value={square[1]} onSquareClick={() => handleClick(1)} />
        <Sauare value={square[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="flex">
        <Sauare value={square[3]} onSquareClick={() => handleClick(3)} />
        <Sauare value={square[4]} onSquareClick={() => handleClick(4)} />
        <Sauare value={square[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="flex">
        <Sauare value={square[6]} onSquareClick={() => handleClick(6)} />
        <Sauare value={square[7]} onSquareClick={() => handleClick(7)} />
        <Sauare value={square[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

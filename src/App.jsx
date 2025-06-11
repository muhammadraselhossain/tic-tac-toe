import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <>
      <button
        onClick={onSquareClick}
        className="bg-white border border-gray-400 rounded h-15 w-15 m-1 leading-9 text-lg bold cursor-pointer"
      >
        {value}
      </button>
    </>
  );
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, SetXIsNext] = useState(true);

  const winner = calcualeteWinner(squares);

  let status;

  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Now Player : ${xIsNext ? "X" : "O"}`;
  }

  const handleClick = (i) => {
    const nextSquares = squares.slice();
    if (squares[i] || calcualeteWinner(squares)) {
      return;
    }

    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    SetXIsNext(!xIsNext);
    setSquares(nextSquares);
  };

  return (
    <>
      <div className="w-scree h-screen flex flex-col gap-10 text-5xl font-bold font-serif items-center justify-center">
        <h1>TIC-TAC-TOE</h1>
        <h2>{status}</h2>
        <div className="grid grid-cols-3 grid-flow-row w-1/8">
          <Square
            value={squares[0]}
            onSquareClick={() => handleClick(0)}
          ></Square>
          <Square
            value={squares[1]}
            onSquareClick={() => handleClick(1)}
          ></Square>
          <Square
            value={squares[2]}
            onSquareClick={() => handleClick(2)}
          ></Square>
          <Square
            value={squares[3]}
            onSquareClick={() => handleClick(3)}
          ></Square>
          <Square
            value={squares[4]}
            onSquareClick={() => handleClick(4)}
          ></Square>
          <Square
            value={squares[5]}
            onSquareClick={() => handleClick(5)}
          ></Square>
          <Square
            value={squares[6]}
            onSquareClick={() => handleClick(6)}
          ></Square>
          <Square
            value={squares[7]}
            onSquareClick={() => handleClick(7)}
          ></Square>
          <Square
            value={squares[8]}
            onSquareClick={() => handleClick(8)}
          ></Square>
        </div>
      </div>
    </>
  );
}

const calcualeteWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default function Game() {
  return (
    <div>
      <div>
        {" "}
        <Board></Board>{" "}
      </div>
      <div></div>
    </div>
  );
}

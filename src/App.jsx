import { useState } from "react";
export function Sauare({ value2 }) {
  const [value, setValue] = useState(null);
  function handleClick() {
    setValue("X");
  }
  return (
    <button
      className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

function Board() {
  return (
    <>
      <div className="flex">
        <Sauare value={1} />
        <Sauare />
        <Sauare />
      </div>
      <div className="flex">
        <Sauare />
        <Sauare />
        <Sauare />
      </div>
      <div className="flex">
        <Sauare />
        <Sauare />
        <Sauare />
      </div>
    </>
  );
}

export default Board;

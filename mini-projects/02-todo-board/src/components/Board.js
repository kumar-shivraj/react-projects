import React from "react";

const Board = ({ task, index, handleDeleteTask }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-start max-w-md px-4 pt-3 pb-4 text-lg text-center border md:px-6 rounded-xl">
        <p>{task}</p>
        <button
          className="px-2 py-1 mt-4 text-white bg-red-500 rounded-lg"
          onClick={() => handleDeleteTask(index)}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default Board;

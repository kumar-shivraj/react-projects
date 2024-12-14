import React, { useState } from "react";

const Input = ({ addTaskList }) => {
  const [input, setInput] = useState("");
  const handleAddTask = (e) => {
    e.preventDefault();
    addTaskList(input);
    setInput("");
  };
  // console.log(input);
  return (
    <>
      <form className="flex flex-row items-center gap-3">
        <input
          type="text"
          placeholder="Enter your todo"
          className="py-1.5 px-2.5  border rounded-lg text-lg "
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="py-2 px-3.5 rounded-lg text-white bg-violet-400
          hover:opacity-70 font-semibold"
          onClick={handleAddTask}
        >
          Add
        </button>
      </form>
    </>
  );
};

export default Input;

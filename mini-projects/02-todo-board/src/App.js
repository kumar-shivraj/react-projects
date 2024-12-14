import { useState } from "react";
import Input from "./components/Input";
import Board from "./components/Board";

function App() {
  const [taskList, setTaskList] = useState([]);
  const addTaskList = (newTask) => {
    setTaskList([...taskList, newTask]);
  };
  const handleDeleteTask = (index) => {
    setTaskList(taskList.filter((task, i) => i !== index));
  };
  console.log(taskList);
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 py-8 bg-red-300">
        <h2 className="text-xl font-semibold">02 - To Do Board</h2>
        <Input addTaskList={addTaskList} />
      </div>
      <div className="flex flex-col gap-4 px-4 sm:grid sm:grid-cols-3 sm:px-8 md:px-1 lg:px-12">
        {taskList.map((task, index) => (
          <Board
            key={index}
            task={task}
            index={index}
            handleDeleteTask={handleDeleteTask}
          />
        ))}
      </div>
    </>
  );
}

export default App;

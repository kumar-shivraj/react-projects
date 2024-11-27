import { useEffect, useState } from "react";

function App() {
  // time in milliseconds
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  const resetHandler = () => {
    setRunning(false);
    setTime(0);
  };
  return (
    <div className="flex flex-col items-center justify-evenly">
      <h2 className="text-2xl font-semibold pb-2">01 - Stopwatch</h2>
      <div className="text-xl font-semibold">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div className="w-1/3 flex justify-between flex-row max-w-sm">
        {running ? (
          <button
            className="border rounded-lg  py-1 px-3.5"
            onClick={() => setRunning(false)}
          >
            Stop
          </button>
        ) : (
          <button
            className="border rounded-lg  py-1 px-3"
            onClick={() => setRunning(true)}
          >
            Start
          </button>
        )}
        <button
          className="border rounded-lg  py-1 px-2.5"
          onClick={resetHandler}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;

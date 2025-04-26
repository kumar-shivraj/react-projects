import React, { useState } from "react";
import Statistic from "./components/Statistics.jsx";
import Screen from "./components/Screen.jsx";
import "./App.css";

function App() {
  const [time, setTime] = useState(30);
  return (
    <div className="App">
      <Statistic time={time} />
      <Screen setTime={setTime} time={time} />
    </div>
  );
}

export default App;

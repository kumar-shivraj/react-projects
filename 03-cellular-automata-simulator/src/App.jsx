import { useState } from "react";
import "./App.css";
import Board from "./components/Board.jsx";
import Header from "./components/Header.jsx";

function App() {
  const [running, setRunning] = useState(false);
  return (
    <>
      <Header running={running} setRunning={setRunning} />
      <Board running={running} />
    </>
  );
}

export default App;

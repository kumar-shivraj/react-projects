import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import DayIntervalChart from "./components/DayIntervalChart.jsx";
function App() {
  const [name, setName] = useState("IBM");
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState([]);
  const [dayIntervalData, setDayIntervalData] = useState({});
  return (
    <div className="App">
      <Header
        name={name}
        setName={setName}
        setData={setData}
        setDayIntervalData={setDayIntervalData}
      />

      <DayIntervalChart dayIntervalData={dayIntervalData} id="first" />
      <DayIntervalChart dayIntervalData={dayIntervalData} id="second" />
    </div>
  );
}

export default App;

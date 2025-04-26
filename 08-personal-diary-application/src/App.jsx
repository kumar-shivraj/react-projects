import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Diary from "./components/Diary";

function App() {
  const [time, setTime] = useState("");
  const [megaData, setMegaData] = useState({});

  useEffect(() => {
    const dateObject = new Date();
    let date = String(dateObject.getDate());
    let month = String(dateObject.getMonth());
    let year = String(dateObject.getFullYear());

    if (date.length === 1) date = "0" + date;
    if (month.length === 1) month = "0" + month;

    const currentDate = year + "-" + month + "-" + date;
    setTime(currentDate);

    let data = localStorage.getItem("DATA");
    if (!data) {
      localStorage.setItem("DATA", JSON.stringify({}));
      data = {};
    } else data = JSON.parse(data);

    setMegaData(data);
  }, []);

  useEffect(() => {
    localStorage.setItem("DATA", JSON.stringify(megaData));
  }, [megaData]);

  return (
    <div className="App">
      <Header time={time} setTime={setTime} />
      <Diary time={time} megaData={megaData} setMegaData={setMegaData} />
    </div>
  );
}

export default App;

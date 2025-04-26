import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const dateObject = new Date();
    var date = String(dateObject.getDate());
    var month = String(dateObject.getMonth());
    var year = String(dateObject.getFullYear());

    if (date.length === 1) date = "0" + date;
    if (month.length === 1) month = "0" + month;

    const currentDate = year + "-" + month + "-" + date;
    setTime(currentDate);
  }, []);
  return (
    <div className="App">
      <Header time={time} setTime={setTime} />
    </div>
  );
}

export default App;

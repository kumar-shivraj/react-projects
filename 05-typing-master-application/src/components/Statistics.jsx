import React, { useEffect, useState } from "react";
import "../styles/Statistics.css";
export default function Statistic(props) {
  const [wpm, setWpm] = useState(0);
  useEffect(() => {
    if (localStorage.getItem("HIGHSCORE") === undefined) {
      localStorage.setItem("HIGHSCORE", "0");
    }
    setWpm(Number(localStorage.getItem("HIGHSCORE")));
  }, []);
  return (
    <React.Fragment>
      <div className="stat-box">
        <div>Time Remaning : {props.time} secs</div>
        <div>Best Speed : {wpm} WPM</div>
      </div>
    </React.Fragment>
  );
}

import React, { useState, useEffect } from "react";
import { Words } from "../assets/Words";
import "../styles/Screen.css";

export default function Screen(props) {
  const [data, setData] = useState([]);
  const [segmentedData, setSegmentedData] = useState([]);
  const [input, setInput] = useState("");
  const [counter, setCounter] = useState(0);
  const [running, setRunning] = useState(false);
  const [score, setScore] = useState(0);
  var timer;

  useEffect(() => {
    const bufferData = [];
    for (let i = 0; i < 50; i++)
      bufferData.push(Words[Math.floor(Math.random() * Words.length)]);
    setData(bufferData);
    document.getElementById("main-input").focus();
  }, []);

  useEffect(() => {
    if (data.lenght == 0) return;
    const bufferSegmentatedData = [];
    var counter = 0;

    while (counter + 10 <= data.length) {
      const rowData = [];
      for (let i = counter; i < counter + 10; i++) rowData.push(data[i]);
      bufferSegmentatedData.push(rowData);
      counter += 10;
    }

    console.log(bufferSegmentatedData);
    setSegmentedData(bufferSegmentatedData);
  }, [data]);

  useEffect(() => {
    if (props.time == 0) {
      if (score * 2 > Number(localStorage.getItem("HIGHSCORE"))) {
        window.alert(`Time Up ! New High Score -> WPM : ${score * 2}`);
        localStorage.setItem("HIGHSCORE", (score * 2).toString());
        window.location = "/";
      } else {
        window.alert(`Time Up ! WPM : ${score * 2}`);
        window.location = "/";
      }
    }
  }, [props.time]);

  function handleInput(event) {
    if (!running) {
      setRunning(true);
      timer = setInterval(
        () => props.setTime((previousTime) => previousTime - 1),
        1000
      );
    }
    if (event.target.value.slice(-1) == " ") {
      const x = Math.floor(counter / 10);
      const y = counter % 10;
      const rowContainer = document.getElementsByClassName(x)[0];
      const valueDiv = rowContainer.childNodes[y];
      if (input == data[counter]) {
        setScore((previousScore) => previousScore + 1);
        valueDiv.style.backgroundColor = "rgb(4, 120, 3)";
        setInput("");
        setCounter((previousCount) => previousCount + 1);
      } else valueDiv.style.backgroundColor = "red";
    } else setInput(event.target.value);
  }
  return (
    <React.Fragment>
      <div id="main-screen">
        {segmentedData.map((row, rowIndex) => (
          <div key={rowIndex} className={rowIndex + " screen-row"}>
            {row.map((value, valueIndex) => (
              <div id={valueIndex} key={valueIndex} className="display-value">
                {value}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          id="main-input"
          placeholder="Start Typing Here"
          autoComplete="off"
          value={input}
          onChange={handleInput}
        ></input>
      </div>
    </React.Fragment>
  );
}

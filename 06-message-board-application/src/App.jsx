import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Create from "./components/Create.jsx";
import Fallback from "./components/Fallback.jsx";
import AllBoard from "./components/AllBoard.jsx";
import MovieBoard from "./components/MovieBoard.jsx";
import MusicBoard from "./components/MusicBoard.jsx";
import ScienceBoard from "./components/ScienceBoard.jsx";
import SportsBoard from "./components/SportsBoard.jsx";

import "./styles/Main.css";

function App() {
  const [data, setData] = useState([]);
  // sample data
  // const data = [
  //   {
  //     message: "hello",
  //     time: "7:53:6",
  //     boards: {
  //       music: true,
  //       movie: true,
  //       sports: true,
  //       science: true,
  //     },
  //   },
  //   {
  //     message: "hello",
  //     time: "7:53:20",
  //     boards: {
  //       music: true,
  //       movie: true,
  //       sports: true,
  //       science: true,
  //     },
  //   },
  //   {
  //     message: "hello",
  //     time: "7:52:32",
  //     boards: {
  //       music: true,
  //       movie: true,
  //       sports: true,
  //       science: true,
  //     },
  //   },
  // ];
  useEffect(() => {
    localStorage.removeItem("debug");
    const bufferData = [];
    const data = { ...localStorage };
    console.log("data : ", data);
    for (let key in data) {
      const requiredData = JSON.parse(data[key]);
      bufferData.push(requiredData);
    }
    setData(bufferData);
  }, []);

  function handleNewData(newData) {
    const bufferData = data;
    bufferData.push(newData);
    setData(bufferData);

    localStorage.setItem(newData.time, JSON.stringify(newData));
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<AllBoard data={data} />} />
        <Route path="/all" element={<AllBoard data={data} />} />
        <Route path="/music" element={<MusicBoard data={data} />} />
        <Route path="/movie" element={<MovieBoard data={data} />} />
        <Route path="/sports" element={<SportsBoard data={data} />} />
        <Route path="/science" element={<ScienceBoard data={data} />} />
        <Route
          path="/create"
          element={<Create handleNewData={handleNewData} />}
        />
        <Route path="*" element={<Fallback />} />
      </Routes>
    </>
  );
}

export default App;

import React, { useState, createContext } from "react";
import Tray from "./Tray";
import "../styles/Form.css";

// Create a context for the data array
export const DataContext = createContext();

function Form() {
  // const [algorithm, setAlgorithm] = useState("bubbleSort");
  // const [algorithm, setAlgorithm] = useState("insertionSort");
  const [algorithm, setAlgorithm] = useState("selectionSort");
  const [data, setData] = useState(generateRandomArray());

  // function generateRandomArray(size = 50, max = 100) {
  //   return Array.from(
  //     { length: size },
  //     () => Math.floor(Math.random() * max) + 1
  //   );
  // }

  function generateRandomArray(size = 50, max = 100) {
    return Array.from({ length: size }, () => ({
      value: Math.floor(Math.random() * max) + 1,
      // color: "default",
      color: "black",
    }));
  }

  const handleAlgorithmChange = (e) => {
    setAlgorithm(e.target.value);
  };

  const regenerateArray = () => {
    setData(generateRandomArray());
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Sorting Visualizer</h1>

      <div className="controls">
        <label htmlFor="algorithm">Select Algorithm:</label>
        <select
          id="algorithm"
          value={algorithm}
          onChange={handleAlgorithmChange}
          className="dropdown"
        >
          <option value="bubbleSort">Bubble Sort</option>
          <option value="selectionSort">Selection Sort</option>
          <option value="insertionSort">Insertion Sort</option>
          <option value="cocktailShakerSort">Cocktail Shaker Sort</option>
        </select>

        <button onClick={regenerateArray} className="edit">
          Regenerate Array 🔁
        </button>
      </div>

      <DataContext.Provider value={data}>
        <Tray algorithm={algorithm} setData={setData} />
      </DataContext.Provider>
    </div>
  );
}

export default Form;

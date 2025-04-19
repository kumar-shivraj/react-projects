import React, { useContext, useEffect, useState } from "react";
import "../styles/Tray.css";
import { DataContext } from "./Form";
import Bar from "./Bar";
import BubbleSort from "../algorithms/BubbleSort";
import cocktailShakerSort from "../algorithms/cocktailShakerSort";
import selectionSort from "../algorithms/selectionSort";
import insertionSort from "../algorithms/insertionSort";

function Tray(props) {
  const data = useContext(DataContext);
  // console.log("data inside Tray : ", data);
  /**
   * State to hold the current color of each bar in the visualization.
   * An array of strings, where each index represents a bar, and the
   * value at that index is the color of the bar. The color string is
   * one of the following:
   * - 'default' : the default color (white)
   * - 'sorted' : the color of a sorted bar (green)
   * - 'current' : the color of the bar currently being compared (yellow)
   */
  const [barStates, setBarStates] = useState([]);
  const [isSorting, setIsSorting] = useState(false);

  // Initialize bar states with default color
  useEffect(() => {
    // setBarStates(new Array(data.length).fill("default"));
    setBarStates(new Array(data.length).fill("black"));
  }, []);
  // }, [data]);

  /**
   * Updates the color of specified bars in the visualization.
   * @param {Array<number>} indices - The indices of the bars to be colored.
   * @param {string} color - The color to apply to the specified bars.
   */

  const updateBarColor = (indices, color) => {
    setBarStates((prev) => {
      const newStates = [...prev];
      indices.forEach((i) => {
        newStates[i] = color;
      });
      return newStates;
    });
  };

  const resetBarColors = () => {
    // setBarStates(new Array(data.length).fill("default"));
    setBarStates(new Array(data.length).fill("black"));
  };

  const finalizeBarColors = async () => {
    const n = data.length;
    for (let i = 0; i < n; i++) {
      // updateBarColor([i], "sorted");
      updateBarColor([i], "green");
      await new Promise((res) => setTimeout(res, 5));
    }
  };

  const sort = async () => {
    if (isSorting) return;

    setIsSorting(true);
    resetBarColors();

    const sortOptions = {
      updateBarColor,
      sleep: (ms) => new Promise((res) => setTimeout(res, ms)),
    };

    switch (props.algorithm) {
      case "bubbleSort":
        await BubbleSort(data, props.setData, sortOptions);
        break;
      case "selectionSort":
        await selectionSort(data, props.setData, sortOptions);
        break;
      case "insertionSort":
        await insertionSort(data, props.setData, sortOptions);
        break;
      case "cocktailShakerSort":
        await cocktailShakerSort(data, props.setData, sortOptions);
        break;
      default:
        await BubbleSort(data, props.setData, sortOptions);
    }

    await finalizeBarColors();
    setIsSorting(false);
  };

  return (
    <React.Fragment>
      <button
        id="sortingButton"
        className="edit"
        onClick={sort}
        disabled={isSorting}
      >
        Sort ⇄
      </button>
      <div className="tray" id="tray">
        <div className="screen" id="screen">
          {data.map((value, i) => (
            <Bar
              key={i}
              id={i}
              i={i}
              value={value}
              length={data.length}
              state={barStates[i]}
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Tray;

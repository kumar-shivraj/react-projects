import React from "react";
import "../styles/Bar.css";

// function Bar({ value, color, i }) {
function Bar(props) {
  const barHeight =
    String(((props.value.value / props.length) * 100) / 2) + "%";
  const barWidth = String(100 / props.length) + "%";
  const leftMarginPercentage = String(props.i * (100 / props.length)) + "%";
  //   console.log("prpps.value: ", props.value.value);
  //   console.log("barHeight", barHeight, "barWidth", barWidth);
  //   console.log("leftMarginPercentage", leftMarginPercentage);

  //   const barStyle = {
  //     height: `${value * 3}px`, // Scale height for better visualization
  //     backgroundColor: color || "#4CAF50", // Default green color
  //   };

  //   return <div className="bar" style={barStyle} id={i}></div>;
  return (
    <div
      className="bar"
      id={props.id}
      style={{
        height: barHeight,
        width: barWidth,
        marginLeft: leftMarginPercentage,
        // backgroundColor: "black",
        backgroundColor: props.state,
      }}
    ></div>
  );
}

export default Bar;

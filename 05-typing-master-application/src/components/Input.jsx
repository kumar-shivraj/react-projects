import React from "react";
import "../styles/Input.css";
export default function Input() {
  return (
    <React.Fragment>
      <div>
        <input
          type="text"
          id="main-input"
          placeholder="Start Typing Here"
          autoComplete="off"
        ></input>
      </div>
    </React.Fragment>
  );
}

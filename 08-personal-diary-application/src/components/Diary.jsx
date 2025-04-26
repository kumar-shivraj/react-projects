import React, { useState, useEffect } from "react";
import "../styles/Diary.css";
export default function Diary(props) {
  const [data, setData] = useState("");

  useEffect(() => {
    if (!props.time) return;

    if (!props.megaData[props.time]) {
      setData("");
      props.setMegaData((previousMegaData) => {
        const newData = { ...previousMegaData };
        newData[props.time] = "";
        return newData;
      });
    } else {
      setData(props.megaData[props.time]);
    }
  }, [props.time]);

  useEffect(() => {
    props.setMegaData((previousMegaData) => {
      const newData = { ...previousMegaData };
      newData[props.time] = data;
      return newData;
    });
  }, [data]);

  function handleChange(event) {
    if (event.target.value) setData(event.target.value);
  }
  return (
    <>
      <textarea
        value={data}
        id="data-area"
        onChange={handleChange}
        spellCheck="false"
      />
    </>
  );
}

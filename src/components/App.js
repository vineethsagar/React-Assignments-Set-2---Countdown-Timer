import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  // write your code here
  const [time, setTime] = useState(0);
  const handleKeyDown = (event) => {
    if (event.keyCode !== 13) {
      console.log("Not enter");
      return;
    }

    if (isNaN(event.target.value)) {
      setTime(0);
      return;
    }
    let inputTime = Math.floor(event.target.value);
    setTime(inputTime);
  };

  const decrement = () => {
    setTime((time) => time - 1);
  };
  useEffect(() => {
    if (time === 0) {
      return;
    }
    const id = setInterval(decrement, 1000);
    return () => {
      clearInterval(id);
    };
  }, [time]);

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for
          <input id="timeCount" onKeyDown={handleKeyDown} /> sec.
        </h1>
      </div>
      <div id="current-time">{time}</div>
    </div>
  );
};

export default App;

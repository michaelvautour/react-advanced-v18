import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("call useEffect");
    if (value >= 10) {
      document.title = `OMG READ!(${value})`;
    } else {
      document.title = `Messages(${value})`;
    }
  }, [value]);

  // on above if you just wanted useEffect to run ONCE on render
  // but in an empty [], otherwise leave it out or pass the specific
  // value that will cause it to call.

  useEffect(() => {
    console.log("will not run twice");
  }, []);

  console.log("render component");
  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Add!
      </button>
      <button className="btn" onClick={() => console.log("Button")}>
        Console!
      </button>
    </>
  );
};

export default UseEffectBasics;

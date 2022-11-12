import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("Mike &");

  // if text is true it returns text, if false then hello world
  const firstValue = text || "hello world";

  // if text is true the nit return hello world, if false then text
  const secondValue = text && "hello world";

  console.log("first:", firstValue);
  console.log("second:", secondValue);

  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h1>value : {secondValue}</h1> */}
      <h1>{text || "Hello"}</h1>
      {text && <h1>Kaiden Rocks</h1>}
    </>
  );
};

export default ShortCircuit;

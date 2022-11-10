import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const counterIncrease = () => {
    setValue(value + 1);
  };

  const counterDecrease = () => {
    if (value !== 0) {
      setValue(value - 1);
    }
  };

  const counterReset = () => {
    setValue(0);
  };

  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button className="btn" type="button" onClick={() => counterIncrease()}>
          Increase value
        </button>
        <button className="btn" type="button" onClick={() => counterDecrease()}>
          Decrease Value
        </button>
        <button className="btn" type="button" onClick={() => counterReset()}>
          Reset
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;

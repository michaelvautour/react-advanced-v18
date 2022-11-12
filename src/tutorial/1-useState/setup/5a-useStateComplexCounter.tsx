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

  // purpose of below function is that without referencing the previous
  // state since the timer is 2 seconds any additional clicks within
  // that timeframe won't be updated. prevState reference fixes that.
  const complexIncrease = () => {
    setTimeout(() => {
      //   setValue(value + 1);
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
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

      <section style={{ margin: "4rem 0" }}>
        <h2>more complex counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexIncrease}>
          Increase later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;

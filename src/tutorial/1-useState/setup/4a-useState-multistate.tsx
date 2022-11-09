import React, { useState } from "react";

const UseStateObject = () => {
  const [name, setName] = useState("kaiden");
  const [age, setAge] = useState(7);
  const [message, setMessage] = useState("PVZ ROCKZ!");

  // With multiple states you don't need a spread operator
  const changeMessage = () => {
    setMessage("Fortnite cool too I guess");
  };
  const changeAge = () => {
    setAge(8);
  };

  const changeName = () => {
    setName("TrackerWacker");
  };

  return (
    <>
      <h3 style={{ color: "green" }} onClick={changeName}>
        {name}
      </h3>
      <h3 style={{ color: "red" }} onClick={changeAge}>
        {age}
      </h3>
      <h3 style={{ color: "purple" }} onClick={changeMessage}>
        {message}
      </h3>
    </>
  );
};

export default UseStateObject;

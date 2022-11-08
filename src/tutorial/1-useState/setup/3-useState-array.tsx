import React, { useState } from "react";
import { data } from "../../../data";

type People = {
  id: number;
  name?: string;
};

const UseStateArray = () => {
  const [people, setPeople] = useState<People[]>([data]);
  console.log(setPeople);
  console.log(people);
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div>
            <h1>{id}</h1>
            <h2>{name}</h2>
          </div>
        );
      })}
      <button className="btn" type="button" onClick={() => setPeople([])}>
        Delete All Users
      </button>
    </>
  );
};

export default UseStateArray;

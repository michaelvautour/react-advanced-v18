import React, { useState } from "react";
import { data } from "../../../data";

type People = {
  id: number;
  name: string;
};

const UseStateArray = () => {
  const [people, setPeople] = useState<People[]>(data);

  console.log(setPeople);
  console.log(people);
  return (
    <>
      {people.map((person) => {
        const { name, id } = person;
        return (
          <div key={id} className="item">
            <h2>{name}</h2>
          </div>
        );
      })}
    </>
  );
};

export default UseStateArray;

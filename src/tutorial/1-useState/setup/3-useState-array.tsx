import React, { useState } from "react";
import { data } from "../../../data";

type People = {
  id: number;
  name?: string;
};

const UseStateArray = () => {
  const [people, setPeople] = useState<People[]>(data);
  console.log(setPeople);
  console.log(people);

  const deleteName = (id: number) => {
    const updateList = people.filter((person) => person.id !== id);
    setPeople(updateList);
  };

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button type="button" onClick={() => deleteName(id)}>
              remove
            </button>
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

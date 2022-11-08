import React, { useState } from "react";
import { data } from "../../../data";

type People = {
  id: number;
  name?: string;
};

const UseStateArray = () => {
  const [people, setPeople] = useState<People[]>(data);

  const deleteUser = (id: number) => {
    const updateList = people.filter((person) => person.id !== id);
    setPeople(updateList);
  };

  console.log(setPeople);
  console.log(people);
  return (
    <>
      {people.map((person) => {
        const { name, id } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button type="button" onClick={() => deleteUser(id)}>
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

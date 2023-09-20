import React, { useState } from "react";
import { data } from "../../data";

const Array = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <>
      <h2>This is an array example in useState Function</h2>
      {people.map((person) => {
        return (
          <div key={person.id} className="flex space-x-4">
            <h2 className="">
              {person.id}. {person.name}
            </h2>
            <button
              type="button"
              onClick={() => removeItem(person.id)}
              className="text-lg hover:text-gray-600"
            >
              Remove
            </button>
            <hr />
          </div>
        );
      })}
      <button
        type="button"
        onClick={() => setPeople([])}
        className="p-2 bg-red-500 rounded-lg hover:bg-blue-500 hover:text-white"
      >
        Clear Items
      </button>
    </>
  );
};

export default Array;

import React, { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);

  const handleComplexcCounter = () => {
    setTimeout(() => {
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };
  return (
    <>
      <section className="items-center">
        <div>
          <h1 className="font-bold text-xl text-gray-600">Regular Counter</h1>
          <h3>{value}</h3>

          <button
            type="button"
            onClick={() => setValue(value - 1)}
            className="mx-5 p-2 rounded-md bg-red-600 text-white"
          >
            Decrease
          </button>
          <button
            type="button"
            onClick={() => setValue(0)}
            className="mx-5 p-2 rounded-md bg-green-600 text-white"
          >
            Reset
          </button>
          <button
            type="button"
            className="mx-5 p-2 rounded-md bg-blue-600 text-white"
            onClick={() => setValue(value + 1)}
          >
            Increase
          </button>
        </div>
        <div className="mt-5">
          <h1 className="text-lg font-bold text-gray-700">
            More Complex Counter
          </h1>
          <h3>{value}</h3>
          <button
            type="button"
            className="mx-5 p-2 rounded-md bg-blue-600 text-white"
            onClick={handleComplexcCounter}
          >
            Increase Value
          </button>
        </div>
      </section>
    </>
  );
};

export default Counter;

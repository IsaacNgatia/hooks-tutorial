import React, { useRef } from "react";

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(refContainer.current.value);
  };
  return (
    <>
      <form className="max-h-72 w-auto p-10" onSubmit={handleSubmit}>
        <input type="text" className="border border-black" ref={refContainer} />
        <button type="submit" className="bg-gray-500 text-white">
          Submit
        </button>
      </form>
    </>
  );
};

export default UseRefBasics;

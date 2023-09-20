import React, { useEffect, useState } from "react";

const ShowNHide = () => {
  const [text, setText] = useState(false);
  return (
    <div>
      <button
        type="button"
        onClick={() => setText(!text)}
        className="p-2 bg-blue-500 rounded-lg items-center"
      >
        Show or Hide
      </button>
      {text && <Item />}
    </div>
  );
};

export default ShowNHide;

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);

  const changeSize = () => {
    return setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log("Hello isaac");
    window.addEventListener("resize", changeSize);
    return () => {
      window.removeEventListener("resize", changeSize);
    };
  }, []);
  return (
    <div>
      <h1 className="text-2xl font-semibold">Window Size</h1>
      <h1 className="text-xl font-medium">Value: {size}</h1>
    </div>
  );
};

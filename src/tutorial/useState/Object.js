import React, { useState } from "react";

const Object = () => {
  const [message, setMessage] = useState({
    name: "Isaac",
    age: 21,
    message: "Random Message",
  });

  const changeMessage = () => {
    setMessage({ ...message, message: "Hello World" });
  };
  return (
    <>
      <h3>{message.name}</h3>
      <h3>{message.age}</h3>
      <h3>{message.message}</h3>
      <button
        type="button"
        onClick={changeMessage}
        className="p-3 bg-blue-400 rounded-lg"
      >
        Change message
      </button>
    </>
  );
};

export default Object;

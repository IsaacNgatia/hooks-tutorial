import React, { useState } from "react";

const topic = "Hello World";

const ChangeTitle = () => {
  const [topic1, setTopic1] = useState(topic);

  const clickHandler = () => {
    if (topic1 === "Hello World") {
      const newTopic = "Hello Isaac two";
      setTopic1(newTopic);
    } else {
      setTopic1("Hello World");
    }
  };

  return (
    <>
      <div>
        {console.log(topic1)}
        <h2 className="font-bold text-lg">{topic1}</h2>
        <button
          type="button"
          onClick={clickHandler}
          className="bg-blue-400 p-3 rounded-md mt-5"
        >
          Change the Topic
        </button>
      </div>
    </>
  );
};

export default ChangeTitle;

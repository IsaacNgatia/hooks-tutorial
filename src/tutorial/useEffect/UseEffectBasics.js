import React, { useEffect, useState } from "react";

const Basics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log(`${value} notifications`);
    if (value >= 1) {
      document.title = `New Messages(${value})`;
    }
  }, [value]);

  return (
    <>
      {console.log("I am working ok")}
      <h1 className="items-center pb-5">Notifications</h1>
      <h3>{value}</h3>
      <button
        type="button"
        onClick={() => setValue(value + 1)}
        className="bg-blue-400 p-3 rounded-lg"
      >
        Add Notification
      </button>
    </>
  );
};

export default Basics;

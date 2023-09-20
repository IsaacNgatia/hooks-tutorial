import React, { useState } from "react";

const ShortCircuit = () => {
  const [value, setValue] = useState("");

  const firstValue = value || "hello world";
  const SecondValue = value && "hello world";
  return (
    <div>
      <h1>Value in OR operator: {firstValue}</h1>
      <h1>Value in AND operator:{SecondValue}</h1>
    </div>
  );
};

export default ShortCircuit;

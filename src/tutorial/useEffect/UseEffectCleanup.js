import React, { useEffect, useState } from "react";

const Cleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => setSize(window.innerWidth);
  useEffect(() => {
    console.log("useEffect");
    window.addEventListener("resize", checkSize);
    return () => {
      console.log("cleanup");
      window.removeEventListener("resize", checkSize);
    };
  });
  console.log("render");
  return (
    <>
      <h1 className="items-center my-6">The size of the Window is:</h1>
      <h3 className="items-center">{size} Pixels</h3>
    </>
  );
};

export default Cleanup;

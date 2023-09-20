import React, { useEffect } from "react";

const Modal = ({ modalContent, closeModal }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 3000);
    // return () => {
    //   console.log("Cleanup session");
    // };
  }, []);

  return (
    <div>
      <p>{modalContent}</p>
    </div>
  );
};

export default Modal;

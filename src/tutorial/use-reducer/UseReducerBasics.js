import React, { useReducer, useState } from "react";
import Modal from "./Modal";
import { reducer } from "./reducer";
// import { data } from "../../data";
// import { type } from "@testing-library/user-event/dist/type";

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "hello world",
};

const UseReducerBasics = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_ITEM", payload: newItem });
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };

  const closeModal = () => {
    return dispatch({ type: "CLOSE_MODAL" });
  };
  return (
    <>
      <div>
        <h1>
          {state.isModalOpen && (
            <Modal closeModal={closeModal} modalContent={state.modalContent} />
          )}
        </h1>
        <form onSubmit={handleSubmit} className="m-10">
          <input
            type="text"
            className="border border-gray-400"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="bg-blue-300 p-1 rounded-lg">
            Submit
          </button>
        </form>
        {state.people.map((person) => {
          return (
            <div key={person.id} className="flex justify-between max-w-md">
              <h4>{person.name}</h4>
              <button
                type="button"
                onClick={() =>
                  dispatch({
                    type: "REMOVE_ITEM",
                    payload: person.id,
                  })
                }
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default UseReducerBasics;

import React, { useState } from "react";

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && email) {
      const person = { id: new Date().getTime().toString(), firstName, email };
      setPeople((people) => {
        return [...people, person];
      });
      setFirstName("");
      setEmail("");
    } else {
      return (
        <div>
          <h1>You have not filled all the fields</h1>
        </div>
      );
    }
  };
  return (
    <>
      <article>
        <form onSubmit={handleSubmit}>
          <div className="border border-black flex w-[900px] bg-green-100">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="border border-black flex w-[900px] bg-green-100">
            <label htmlFor="email">Email : </label>

            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="p-3 bg-blue-600">
            Add User
          </button>
        </form>
      </article>
      <article>
        <ol>
          {people.map((person) => {
            return (
              <div key={person.id}>
                <li>{person.firstName}</li>
                <li>{person.email}</li>
              </div>
            );
          })}
        </ol>
      </article>
    </>
  );
};

export default ControlledInputs;

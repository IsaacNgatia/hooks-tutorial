import React, { useEffect, useState } from "react";

const url = "https://api.github.com/users";
const UseEffectFetch = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setUsers(data);
  };
  useEffect(() => {
    getUsers();
    return () => {};
  }, []);

  return (
    <>
      <h1 className="items-center text-3xl font-semibold text-black">
        Github Users
      </h1>

      {console.log(users)}
      <div className="grid grid-cols-3 gap-4">
        {users.map((user) => {
          return (
            <div
              key={user.id}
              className="items-center bg-blue-100 rounded-lg flex space-x-5"
            >
              <img
                src={user.avatar_url}
                alt="avatar"
                className="rounded-full items-start h-28 w-28 m-2"
              />
              <div className="items-center">
                <h1 className="text-lg font-bold">{user.login}</h1>
                <a href={user.html_url}>
                  <h1 className="text-gray-700 hover:text-gray-500 font-mono">
                    Profile
                  </h1>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default UseEffectFetch;

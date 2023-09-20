import React, { useEffect, useState } from "react";

const url = "https://api.github.com/users/pjhyett";

const MultipeReturn = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("Default User");

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        } else {
          setIsError(true);
          setIsLoading(false);
          throw new Error(resp.statusText);
        }
      })
      .then((user) => {
        const { login } = user;
        setUser(login);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return (
      <div className="items-center">
        <h1>Loading ...</h1>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="items-center">
        <h1>There has been an error when fetching...</h1>
      </div>
    );
  }

  return <div>{user}</div>;
};

export default MultipeReturn;

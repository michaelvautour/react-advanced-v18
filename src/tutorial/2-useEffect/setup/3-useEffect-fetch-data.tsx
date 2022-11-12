import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

type Github = {
  login: string,
  avatar_url: string,
  id: number,
  html_url: string,
};

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
    console.log(users);
  };

  // useEffect cannot use a promise, so you need to do it via callback function within it
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h3>github users</h3>
      <ul className="users">
        {users.map((user) => {
          const { login, avatar_url, id, html_url }: Github = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;

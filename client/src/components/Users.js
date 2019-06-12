import React, { useState, useEffect } from "react";
import axios from "axios";

const Users = () => {
  const [state, setState] = useState({
    users: []
  });

  useEffect(() => {
    const endpoint = "http://localhost:5000/api/users";
    const token = localStorage.getItem("token");
    const requestConfig = {
      headers: {
        authorization: token
      }
    };

    axios
      .get(endpoint, requestConfig)
      .then(res =>
        setState({
          ...state.users,
          users: res.data
        })
      )
      .catch(err => console.log(err));
  });
  return (
    <div>
      <h1>Welcome!</h1>
      <p>Below you will find the current list of users.</p>
      {state.users &&
        state.users.map(u => {
          return <p key={u.id}>{u.username}</p>;
        })}
    </div>
  );
};

export default Users;

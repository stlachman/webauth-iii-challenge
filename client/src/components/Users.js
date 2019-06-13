import React from "react";
import axios from "axios";

class Users extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    const endpoint = "http://localhost:5000/api/users";
    const token = localStorage.getItem("token");
    const requestConfig = {
      headers: {
        authorization: token
      }
    };

    axios
      .get(endpoint, requestConfig)
      .then(res => this.setState(() => ({ users: res.data })))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>Welcome!</h1>
        <p>Below you will find the current list of users.</p>
        {this.state.users &&
          this.state.users.map(u => {
            return <p key={u.id}>{u.username}</p>;
          })}
      </div>
    );
  }
}

export default Users;

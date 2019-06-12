import React from "react";

class Registration extends React.Component {
  render() {
    return (
      <div>
        <h1>Register Below!</h1>
        <form action="">
          <input name="username" type="text" />
          <input name="password" type="password" />
          <input name="department" type="text" />
          <button>Register</button>
        </form>
      </div>
    );
  }
}

export default Registration;

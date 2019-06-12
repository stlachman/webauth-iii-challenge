import React from "react";

class Login extends React.Component {
  render() {
    return (
      <div>
        <h1>Login Below!</h1>
        <form action="">
          <input name="username" type="text" />
          <input name="password" type="password" />
          <button>Log In</button>
        </form>
      </div>
    );
  }
}

export default Login;

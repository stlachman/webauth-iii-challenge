import React from "react";
import axios from "axios";

const token = localStorage.getItem("token");

axios.defaults.baseURL = "http://localhost:5000/api";

axios.interceptors.request.use(
  config => {
    config.headers.authorization = token;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default function(Component) {
  return class Authenticated extends React.Component {
    render() {
      const notLoggedIn = (
        <div>
          <p>Please sign in to see our users</p>
        </div>
      );
      return <> {token ? <Component {...this.props} /> : notLoggedIn} </>;
    }
  };
}

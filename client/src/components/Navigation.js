import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import styled from "styled-components";

const logOut = (event, props) => {
  event.preventDefault();
  localStorage.removeItem("token");
  props.history.push("/signin");
};

const NavBar = styled.nav`
  background-color: #efefef;
  display: flex;
  flex-wrap: wrap;
  padding: 20px 15px;
`;

const NavColumn = styled.div`
  display: flex;
  align-items: center;
  flex: 2;
`;

const NavContainer = styled.ul`
  margin: 0;
`;

const NavItem = styled.li`
  margin: 0 15px;
  display: inline-block;
`;

const Button = styled.button`
  background: #326280;
  color: #fff;
  padding: 12px 20px;
  display: inline-block;
  font-size: 14px;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`;

const Navigation = props => {
  return (
    <NavBar>
      <NavColumn>
        <NavContainer>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/users">Users</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/signin">Sign In</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/signup">Sign Up</NavLink>
          </NavItem>
        </NavContainer>
      </NavColumn>

      <Button onClick={event => logOut(event, props)}>Logout</Button>
    </NavBar>
  );
};

export default withRouter(Navigation);

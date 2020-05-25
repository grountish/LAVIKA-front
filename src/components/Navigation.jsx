import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/Auth";
import styled from "styled-components";
import { Device } from "../components/Device";

const Nav = styled.nav`
  @media ${Device.laptop} {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-items: center;
    justify-content: space-around;
    font-family: Mantra;
    font-size: 1.3rem;
    height: 5rem;
    width: 95%;
    margin-left: 2.5%;
    margin-bottom: 2.5%;
    border-bottom: solid black 1px;
    letter-spacing: 2px;

    .navbar-btns {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      width: 50%;
      margin-left: 15rem;
      color: #272727;
      margin-top: 15px;
    }
    .navbar-btns * {
      margin-left: 14px;
      text-decoration: none;
      color: #272727;
    }
    #xp-btn {
      text-decoration: none;
    }

    .logo {
      font-family: Mantra;
      font-size: 2.3rem;
      padding: 2rem;
      margin-right: 2rem;
      color: #272727;
      margin-top: 15px;
    }
  }

  @media ${Device.tablet} {
    width: 100%;
    background-color: blue;
  }

  @media ${Device.mobile} {
    width: 100%;
    background-color: yellow;
  }
`;

class Navigation extends Component {
  render() {
    // `user`, `logout`, `isLoggedIn` are coming from the AuthProvider
    // and are injected by the withAuth HOC
    const { user, logout, isLoggedIn } = this.props;

    return (
      <Nav>
        <Link to={"/home"} id="xp-btn">
          <h4 className="logo">LAVIKA</h4>
        </Link>

        {isLoggedIn ? (
          <div className="navbar-btns">
            <Link to={"/profile"} id="profile-btn">
              <h4>{user.username}</h4>
            </Link>
            <Link to={"/xp"} id="xp-btn">
              <h4>XP</h4>
            </Link>
            <Link to={"/comunity"} id="comunity-btn">
              <h4>COMUNITY</h4>
            </Link>
            <h4 onClick={logout}> Logout </h4>
          </div>
        ) : (
          <>
            <Link to="/login">
              {" "}
              <h4 className="navbar-button">Login</h4>{" "}
            </Link>
            <br />
            <Link to="/signup">
              {" "}
              <h4 className="navbar-button">Sign Up</h4>{" "}
            </Link>
          </>
        )}
      </Nav>
    );
  }
}
export default withAuth(Navigation);

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../lib/Auth'
import { ThemeProvider } from 'emotion-theming'
import theme from '@rebass/preset'
import {Flex} from 'rebass'
class Navigation extends Component {
  render() {
    // `user`, `logout`, `isLoggedIn` are coming from the AuthProvider 
    // and are injected by the withAuth HOC
    const { user, logout, isLoggedIn } = this.props;

    return (
      <ThemeProvider theme={theme}>
      <Flex className="navbar">
       
          <h4>LAVIKA</h4>
       
        {
          isLoggedIn
            ? <div className="navbar-btns">
              <Link to={'/profile'} id='profile-btn'>
                <h4>{user.username}</h4>
              </Link>
              <Link to={'/xp'} id='xp-btn'>
              <h4>XP</h4>
               </Link>
              <Link to={'/comunity'} id='comunity-btn'>
              <h4>COMUNITY</h4>
               </Link>
              <h4 onClick={logout}> Logout </h4>
            </div>
            : (
              <>
                <Link to="/login">
                  {' '}
                  <h4 className="navbar-button">Login</h4>{' '}
                </Link>
                <br />
                <Link to="/signup">
                  {' '}
                  <h4 className="navbar-button">Sign Up</h4>{' '}
                </Link>
              </>
            )}
      </Flex>
      </ThemeProvider>
    );
  }
}

export default withAuth(Navigation);
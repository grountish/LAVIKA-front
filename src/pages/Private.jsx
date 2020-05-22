import React, { Component } from "react";
import { withAuth } from './../lib/Auth';

class Private extends Component {
  render() {
    return (
      <div>
        <h1>About / Instruccions</h1>
        {
          this.props.isLoggedIn
            ? <div>
          
            <h3>Username: {this.props.user.username}</h3>
            </div>
            : null
        }

      </div>
    );
  }
}

export default withAuth(Private);
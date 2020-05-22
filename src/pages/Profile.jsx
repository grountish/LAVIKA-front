import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { withAuth } from "./../lib/Auth";
import { ProfileContext } from "../contexts/ProfileContext";
//IMPORT DATA FROM MONGO
//MAP OVER ALL Profile COLLECTION
//DIPLAY ONE CARD FOR EACH SONG WITH TITLE AND DESCRIPTION
class Profile extends Component {
  static contextType = ProfileContext;
  render() {
    const { user } = this.props;
    console.log(this.props);
    return (
      <div>
        <h1>Profile PAGE </h1>
        <h4>{user.username}</h4>
      
      </div>
    );
  }
}

export default withAuth(Profile);

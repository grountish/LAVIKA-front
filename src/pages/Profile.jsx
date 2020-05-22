import React, { Component } from "react";
import axios from "axios";
import { withAuth } from "./../lib/Auth";

class Profile extends Component {
  state = {
    user: null,
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/users", { withCredentials: true })
      .then((response) => this.setState({ user: response.data }));
  }

  render() {
    const { user } = this.state;
    console.log(user);
    return (
        <div>
        {
            !user
            ? 'loading'
            : 
            <div>
            <h1>{user.name}</h1>
            {user.songs.map(song=>{
                return (
                    <h4>
                        {song.name}
                    </h4>
                )
            })}   
            </div>
        }
    </div>
    )
  }
}

export default withAuth(Profile);

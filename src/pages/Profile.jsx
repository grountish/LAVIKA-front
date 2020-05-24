import React, { Component } from "react";
import axios from "axios";
import { withAuth } from "./../lib/Auth";
import { Link } from "react-router-dom";

class Profile extends Component {
    state = {
        user: null,
    };

    componentDidMount() {
        axios
            .get("http://localhost:5000/users", { withCredentials: true })
            .then((response) => this.setState({ user: response.data }));
    }

  handleDelete(id){
    console.log(id)
    axios
    .delete(`http://localhost:5000/scenes/${id}`, { withCredentials: true })
    .then((response) => console.log(response));
    this.componentDidMount()

  }

  render() {
    const { user } = this.state;
    console.log(user);
    return (
      <div>
        {!user ? (
          "loading"
        ) : (
          <div>
          <img
              className="profileImg mt-4"
              src={user.imgPath ? user.imgPath : 'hay q poner foto default'}
              alt=""
            />
            <h1>{user.username}</h1>
            <h4>{user.email}</h4>
            <p>{user.aboutMe}</p>
            <Link to={`/edit-profile`}>
                  <h4>Edit profile</h4>
            </Link>
            {user.songs.map((song) => {
              return (
                <div key={song._id}>
                  <h4>{song.name}</h4>
                  <audio controls>
                    <source src={song.urlPath} type="audio/ogg" />
                    <source src={song.urlPath} type="audio/mpeg" />
                    Your browser does not support the audio tag.
                  </audio>
                  <button onClick={()=>{this.handleDelete(song._id)}}>X</button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default withAuth(Profile);

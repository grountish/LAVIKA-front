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
      .get(process.env.REACT_APP_API_URL + "/users", { withCredentials: true })
      .then((response) => this.setState({ user: response.data }));
  }

  handleDelete(id){
    console.log(id)
    axios
    .delete(`${process.env.REACT_APP_API_URL}/scenes/${id}`, { withCredentials: true })
    .then((response) => console.log(response));
    this.componentDidMount()

  }

  render() {
    const { user } = this.state;
    return (
      <div>
        {!user ? (
          "loading"
        ) : (
          <div>
          <img
              className="profileImg mt-4" style={{width:'100px'}}
              src={user.imgPath ? user.imgPath : 'hay q poner foto default'}
              alt=""
            />
            <h1>{user.username}</h1>
            <h4>{user.email}</h4>
            <p>{user.aboutMe}</p>
            <Link to={`/edit-profile`}>
                  <h4>Edit profile</h4>
            </Link>
        
            <div>
              { user.scenes !== undefined 
              ? user.scenes.map(scene=>{
                  return(
                    <div key={scene._id}>
                    <Link to={`/xp/${scene._id}`}>
                      <h4>{scene.name}</h4>
                      </Link>
                      <img src={scene.capture} style={{width:'100px'}} alt="asd"/>
                      <button onClick={()=>{this.handleDelete(scene._id)}}>X</button>
                    </div>
                  )
                })
                : null
              }
            </div>
          </div>
          
        )}
      </div>
    );
  }
}

export default withAuth(Profile);

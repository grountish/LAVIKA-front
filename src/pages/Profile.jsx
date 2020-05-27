import React, { Component } from "react";
import axios from "axios";
import { withAuth } from "./../lib/Auth";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ProfilePage = styled.div`
     max-width: 95%;
      margin-left: 2.5%;
      align-items: center;
      justify-items: center;
      text-align: center;
      color: black;
`
const ScenesDiv = styled.div`
width: 60%;
float: right;
height:100%;
display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 2px;
      grid-auto-rows: min-max(15rem);
      justify-items: center;
      align-items: center;
`
const ProfileDiv = styled.div`
width: 30%;
float: left;
height:100%;
`
const ScenesCards = styled.div`
cursor: pointer;
display: flex;
        flex-direction: column;
        max-width: 20rem;
        height: 20rem;
        align-items: center;
        justify-items: center;
        margin: 1rem;
        position: relative;
        

`
const ProfPic = styled.img`
width:15rem;
height: 15rem;
border: solid 2px black;
border-radius: 50%;
object-fit: cover;
object-position: 100% 50;
`
const SceneImg = styled.img`
width:20rem;
height: 20rem;
object-fit: cover;
transition: 0.5s;
opacity:1;
:hover {
  opacity: 0.1;
}

`

const SceneText = styled.div`
width:20rem;
height: 20rem;
background: rgba(200, 200, 200, 0.72);
color: #fff;
position: absolute;
transition: 0.5s;
opacity:0;

        :hover{
          opacity:1;
        }
  
a{
  text-decoration: none;
  color: black;
  font-size: 1rem;
}
`
const CardA = styled.a`
height: 1rem;
width: 1rem;
background-color: #a71b1b;
border: 2px solid black;
border-radius: 10%;
text-align: center;
padding:3px;
cursor: pointer;
opacity: 0.75;
`

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
      <ProfilePage>
        {!user ? (
          "loading"
        ) : (
          <div>
          <ProfileDiv >
             <ProfPic 
              src={user.imgPath ? user.imgPath : 'default'}
              alt="avatar"
            />
            <h1>{user.username}</h1>
            <h4>{user.email}</h4>
            <p>{user.aboutMe}</p>
            <Link to={`/edit-profile`}>
                  <h4>Edit profile</h4>
            </Link>
        </ProfileDiv>
            <ScenesDiv>
              { user.scenes !== undefined 
              ? user.scenes.map(scene=>{
                  return(
                    <ScenesCards className="sceneCard" key={scene._id}>
                  
                      <SceneImg className="imgCard" src={scene.capture} alt="asd"/> 
                      <SceneText>
                       <Link to={`/xp/${scene._id}`}>
                      <h2 className="nameScene">{scene.name}</h2>
                      </Link> 
                      <CardA onClick={()=>{this.handleDelete(scene._id)}}>X</CardA>
                      </SceneText>
                    </ScenesCards>
                  )
                })
                : null
              }
            </ScenesDiv>
            </div>
        )}
      </ProfilePage>
    );
  }
}

export default withAuth(Profile);

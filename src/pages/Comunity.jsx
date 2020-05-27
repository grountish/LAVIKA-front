import React, { Component } from "react";
import axios from "axios";
import { withAuth } from "../lib/Auth";
import styled from "styled-components";
import { Device } from "../components/Device";
import Navigation from "../components/Navigation";

class Community extends Component {
  // static contextType = SongsContext;
  state = {
    songs: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/scenes", { withCredentials: true })
      .then((response) => this.setState({ songs: response.data }));
  }

  render() {
    const { user } = this.props;
    const songs = this.state.songs;

    const CommunityPage = styled.div`
      max-width: 95%;
      margin-left: 2.5%;
      align-items: center;
      justify-items: center;
      text-align: center;
      color: black;
    `;
    const DescriptionBox = styled.div`
      max-width: 10rem;
      max-height: 10rem;
      justify-items: center;
      align-items: center;
      text-align: center;
      overflow-wrap: break-word;
      margin: 1rem;
      margin-top: 2rem;
    `;
    const GridContainer = styled.div`
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 5px;
      grid-auto-rows: min-max(15rem);
      justify-items: center;
      align-items: center;
    `;

    const Card = styled.div`
      @media ${Device.laptop} {
        cursor: pointer;
        background-color: none;
        border: 1px solid black;
        display: flex;
        flex-direction: column;
        max-width: 20rem;
        height: 20rem;
        align-items: center;
        justify-items: center;
        margin: 1rem;
        padding: 1rem;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        transition: 0.3s;
        letter-spacing: 1px;
        border-radius: 10px;
        h4 {
          font-size: 1.5rem;
          letter-spacing: 0.5px;
          font-weight: 400;
        }
        h6 {
          font-size: 1.2rem;
          letter-spacing: 0.5px;
          font-weight: 400;
        }
        p {
          font-size: 0.8rem;
          letter-spacing: none;
          font-weight: 300;
        }
        :hover {
          box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
          background-color: grey;
        }
      }
      @media ${Device.laptop} {
      }
      @media ${Device.laptop} {
      }
    `;

    const Loader = styled.div`
    @media ${Device.laptop} {
  position: relative;
  transform-style: preserve-3d;
  perspective: 800;
  .arc {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border-bottom: 3px solid grey;
    @for $i from 1 through 3 {
      &:nth-child(#{$i}) {
        animation: rotate#{$i} 1.15s linear infinite;
      }
    }
    &:nth-child(1) {
      animation-delay: -1.0s;
    }
    &:nth-child(2) {
      animation-delay: -0.5s;
    }
    &:nth-child(3) {
      animation-delay: 0s;
    }
  }
}
@keyframes rotate1 {
  from {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(0);
  }
  to {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(1turn);
  }
}
@keyframes rotate2 {
  from {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(0);
  }
  to {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(1turn);
  }
}
@keyframes rotate3 {
  from {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(0);
  }
  to {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(1turn);
  }
}
    }
    
  `;

    const Audio = styled.audio`
      width: 15rem;
      margin-top: 2rem;
    `;

    const Title = styled.h1`
      font-family: Mantra;
      font-size: 3rem;
      color: black;
      margin-bottom: 3rem;
      margin-top: 3rem;
    `;
    return (
      <CommunityPage>
      <Navigation />
        <Title>Community Page </Title>
        <GridContainer>
          {this.state.songs.length > 0 ? (
            songs.map((song) => {
              return (
                <Card id="card" key={song._id}>
                  <h4>Artist:</h4>
                  <h6>{song.artist}</h6>
                  <h4>Title:</h4>
                  <h6>{song.name}</h6>
                  <Audio controls>
                    <source src={song.urlPath} type="audio/ogg" />
                    <source src={song.urlPath} type="audio/mpeg" />
                    Your browser does not support the audio tag.
                  </Audio>
                  <DescriptionBox>
                    <h8>Description:</h8>
                    <p>{song.description}</p>
                  </DescriptionBox>
                </Card>
              );
            })
          ) : (
            <Loader class="loader">
              <div class="arc"></div>
              <div class="arc"></div>
              <div class="arc"></div>
            </Loader>
          )}
        </GridContainer>
      </CommunityPage>
    );
  }
}

export default withAuth(Community);
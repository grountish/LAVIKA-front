import React, { Component } from "react";
import axios from "axios";
import { withAuth } from "./../lib/Auth";
import WaveForm from './../components/WaveForm'


class Comunity extends Component {
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

    return (
      <div>
        <h1>Comunity PAGE </h1>
        <h4>{user.username}</h4>
        <div className="songContainer">
          {this.state.songs.length > 0 ? (
            songs.map((song, ind) => {
              return (
                <div>
                
                <WaveForm key={ind} urlPath={song.urlPath} />
                </div>
              );
            })
          ) : (
              <h1>Wait until the tracks load...</h1>
            )}
        </div>
      </div>
    );
  }
}

export default withAuth(Comunity);

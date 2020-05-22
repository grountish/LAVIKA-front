import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { withAuth } from "./../lib/Auth";
import { SongsContext } from "../contexts/SongsContext";
//IMPORT DATA FROM MONGO
//MAP OVER ALL SONGS COLLECTION
//DIPLAY ONE CARD FOR EACH SONG WITH TITLE AND DESCRIPTION
import Waveform from './../components/WaveForm';

class Comunity extends Component {
  static contextType = SongsContext;
  render() {
 
    console.log(this.context.data);
    return (
      <div>
        <h1>Comunity PAGE </h1>
        <Waveform />
      </div>
    );
  }
}

export default withAuth(Comunity);

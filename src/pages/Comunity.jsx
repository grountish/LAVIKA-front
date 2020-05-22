import React, { Component } from "react";
import axios from "axios";
import { withAuth } from "./../lib/Auth";


  class Comunity extends Component {
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
    console.log(songs);

    return (
      <div>
        <h1>Comunity PAGE </h1>
        <h4>{user.username}</h4>
             
        {this.state.songs.length > 0 ? (
          songs.map((song) => {
            return (
              <div key={song._id}>
                <h4>{song.name}</h4>
                <audio controls>
                   <source src={song.urlPath} type="audio/ogg"/>
                  <source src={song.urlPath} type="audio/mpeg"/>
                     Your browser does not support the audio tag.
                </audio>
              </div>
            );
          })
        ) : (
          <h1>Coming</h1>
        )}

        {/* <Card width={356}>
  <Image src={props.image} />
  <Heading>SCENE</Heading>
  <Text
  fontSize={[2,3]}
  fontWeight='REGULAR'
  color='BLACK'>
  gfhgfjuhkjhhgn gkhm,lkhkuhjmh hjkh,hhkgkgh jljkliilkjljljñokñkññjklhkjhghg
</Text>
</Card> */}
      </div>
    );
  }
}

export default withAuth(Comunity);

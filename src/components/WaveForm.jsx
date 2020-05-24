import React, { Component } from 'react';
import WaveSurfer from 'wavesurfer.js';

class Waveform extends Component {  

  constructor(props){
    super(props);
    this.state = {
      playing: false,
    }
  }
  componentDidMount() {
    this.waveform = WaveSurfer.create({
      container: '#waveform',
      scrollParent: true
    });

    this.waveform.load(this.props.urlPath);
  };
  
  handlePlay = () => {
    this.setState({ playing: !this.state.playing });
    this.waveform.playPause();
  };
  
  render() {
    return (
             
        <div id="waveform"> 
        <button onClick={this.handlePlay}>
          {!this.state.playing ? 'Play' : 'Pause'}
        </button>
        </div>  
     
    );
  }
};

export default Waveform;
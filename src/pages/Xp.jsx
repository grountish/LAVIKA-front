import React, { Component } from 'react'
import NewSketch from '../components/NewSketch'
import NewSketch2 from '../components/NewSketch2'
import NewSketch3 from '../components/NewSketch3'
import { withAuth } from './../lib/Auth';
import axios from 'axios'
import styled from "styled-components";
import { Device } from "../components/Device";

const XpContainer = styled.div`
@media ${Device.laptop} {
  text-align:center
  
}

.buttonSwitch{
  margin: 0 auto;
  width: 130px;
  font-size: 14px
} 

@media ${Device.tablet} {

}

@media ${Device.mobile} {
 
}
`;
class Xp extends Component {
  constructor(props){
  super(props)
  this.state = {
    scene: null,
    canvas: 0
  }
}
  componentDidMount() {
    let sceneId = this.props.match.params.id;

    if(sceneId) {
      axios.get(process.env.REACT_APP_API_URL + `/scenes/${sceneId}`, { withCredentials: true })
    
      .then((response) => {
        let scene = response.data
        this.setState({scene})

      }).catch((err) => {
        console.log(err);
      });
    } else {
      this.setState({scene: false})
    }
  }

  switchCanvas = ()=>{
    this.setState({canvas: (this.state.canvas + 1) % 2})

  }
  render(){
    let canvas;
    switch(this.state.canvas){
      case(0):
      canvas = <NewSketch scene = {this.state.scene} />
      break;
      case(1):
      canvas = <NewSketch2 scene = {this.state.scene} />
      break;
      case(2):
      canvas = <NewSketch3 scene = {this.state.scene} />
      break;
      default:
      canvas = <NewSketch scene = {this.state.scene} />
      break; 
    }

  return (
    <XpContainer>
      <button className="buttonSwitch" onClick={this.switchCanvas}>Switch experience</button>
    {
      this.state.scene === null 
      ? null 
      : canvas
  
    }
    </XpContainer>
  )
}
}

export default withAuth(Xp);
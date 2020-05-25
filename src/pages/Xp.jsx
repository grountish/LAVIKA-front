import React, { Component } from 'react'
import NewSketch from '../components/NewSketch'
import NewSketch2 from '../components/NewSketch2'
import NewSketch3 from '../components/NewSketch3'
import { withAuth } from './../lib/Auth';
import { ThemeProvider } from 'emotion-theming'
import theme from '@rebass/preset'


class Xp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canvas: 0,
    };
}
switchCanvas = ()=>{
  this.setState({canvas: this.state.canvas +1})
}
  render(){

    let canvas;
    switch(this.state.canvas) {
     case(0):
     canvas = <NewSketch/>
     break;
     case(1):
     canvas = <NewSketch2/>
     break;
     case(2):
     canvas = <NewSketch3/>
     break;
     default:
     canvas = <NewSketch/>
    }

  return (
    <ThemeProvider theme={theme}>
				<button onClick={this.switchCanvas}>Change Sketch</button>
    <div>
     {canvas}
      </div>
    </ThemeProvider>
  )
}
}

export default withAuth(Xp);
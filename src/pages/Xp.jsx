import React, { Component } from 'react'
import NewSketch from '../components/NewSketch'
import AddThing from '../components/AddThing'
import { withAuth } from './../lib/Auth';
import { ThemeProvider } from 'emotion-theming'
import theme from '@rebass/preset'
import { Button} from 'rebass'

class Xp extends Component {
  state = {
    showSketch: true,
  }

  render(){
  return (
    <ThemeProvider theme={theme}>
    <div> 
      <h1>XP PAGE </h1>
      {
        this.state.showSketch ? <NewSketch /> : null
      }
      <AddThing />
      <Button variant='outline' mr={2} onClick={() => this.setState({showSketch: !this.state.showSketch})}>toggle sketch</Button>
    </div>
    </ThemeProvider>
  )
}
}

export default withAuth(Xp);
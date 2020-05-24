import React, { Component } from 'react'
import NewSketch from '../components/NewSketch'
import { withAuth } from './../lib/Auth';
import { ThemeProvider } from 'emotion-theming'
import theme from '@rebass/preset'


class Xp extends Component {
  render(){
  return (
    <ThemeProvider theme={theme}>
    <div> 
     <NewSketch /> 
      </div>
    </ThemeProvider>
  )
}
}

export default withAuth(Xp);
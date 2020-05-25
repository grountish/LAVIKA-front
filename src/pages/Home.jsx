import React from 'react'
import styled from 'styled-components'
import { Device } from '../components/Device';


function Home() {
  const Title = styled.h1`
    @media ${Device.laptop} { 
    max-width: 1100px;
    color: yellow;
    font-size: 10rem;
  }

    @media ${Device.tablet} { 
    max-width: 768px;
    color: green;
    font-size: 6rem;
  }

  @media ${Device.mobile} { 
    max-width: 400px;
    color: red;
    font-size: 3rem;
  }
`
  return (
    <div> 
      <Title>HOME PAGE </Title>
   
    </div>
  )
}

export default Home;
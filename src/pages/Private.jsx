import React, { Component } from "react";
import { withAuth } from './../lib/Auth';
import styled from "styled-components";
import { Device } from "../components/Device";


class Private extends Component {
  render() {
    const AboutInstr = styled.div`
      @media ${Device.laptop} {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 80%;
        margin: 0 auto;
      }

      @media ${Device.tablet} {
        width: 100%;
        background-color: blue;
      }

      @media ${Device.mobile} {
        width: 100%;
        background-color: yellow;
      }
    `;
    return (
      <AboutInstr>
        <h1>About / Instruccions</h1>
       <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, accusantium? Provident, tempore eaque accusamus, nostrum odio mollitia ab ipsa, explicabo ad eligendi modi. Nesciunt ad porro labore dolorem ipsam quis!</h3>

      </AboutInstr>
    );
  }
}

export default withAuth(Private);
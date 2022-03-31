import React from 'react'
import styled from 'styled-components'
import girl from '../assets/images/girlyBox.png'
import blueBg from '../assets/images/blueBack.svg'
import boy from "../assets/images/boyishBox.png";

import {HashLink} from 'react-router-hash-link'

const GetStarted = () => {
  return (
    <StyledGet>
        <div className="textContainer">
          <div className="textLg">Get started <span>now</span></div>
          <div className="footNote">Here at Satorm we have two specialized class groups </div>
          <div className="footNote">to accommodate your level in digital marketting</div>
        </div>
        <div className="Container">
        
          <div className="imageCard">
       
          <div className="textandBut">
            <div className="cardText">Basic Class</div>
            <HashLink to="/pricing/#basic" className="classButton">Start a class today</HashLink>
            </div>
          </div>


          <div className="imageCard second">
            <div className="textandBut">
            <div className="cardText">Advanced Class</div>
            <HashLink to="/pricing/#advanced" className="classButton">Start a class today</HashLink>
            </div>
          </div>

        </div>
    </StyledGet>
  )
}

export default GetStarted

const StyledGet =styled.section`
      padding: 5em 5%;
    .textContainer{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0em 5%;
      .textLg{
         color: #0A033C;
         font-family:'Poppins', sans-serif;
         font-weight: 700;
         font-size: 2.15em;
        span{
          color:#FAB900;
        }
      }
      .footNote{
        color: #5D5D59;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        font-size: 1.25em;

      }

    }

    .Container{
      display: flex;
      column-gap: 1.81em;
      margin-top: 3em;
      padding: 0em 7em;
      @media (max-width: 930px) {
        flex-direction: column;
        gap:1.2em;
        padding: 0em 0.5em;
      }

      .second{
        background-image: url(${boy}) !important;
      }

      .imageCard{
        background-repeat: no-repeat;
        position: relative;
        /* padding: 8.7em 7.1rem 8.7rem 8.1rem; */
        background-image: url(${girl});
        background-size: cover;
        mix-blend-mode: normal;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        content: "";
        border-radius: 5%;
        width: 100%;
        height: 25rem;
        max-height: 25rem;
       
        &::before{
          position: absolute;
          background-image: url(${blueBg});
          background-size: cover;
          height: inherit;
          width: 100%;
          border-radius: 5%;
          content: '';
        }
  

        .textandBut{
          position: relative;
          display: flex;
          flex-direction: column;
          align-self: center;
          margin: 0auto;
         
        .cardText{
          color: #FFFFFF;
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          font-size: 2.1em;  
          text-align: center;

          @media (max-width:1066px) {
            font-size: 1.8em;
          }

          @media (max-width: 930px) {
        flex-direction: column;
        font-size: 2.1em;
      }
      @media (max-width: 500px) {
        flex-direction: column;
        font-size: 1.9em;
      }
        }

        .classButton{
          bottom: 5em;
          background: rgba(255, 255, 255, 0.15);
          padding: 0.8em;
          border: 1px solid #FFFFFF;
          border-radius: 1em;
          font-size: 1.375em;
          color:#FFFFFF;
          font-weight: 600;
          text-decoration: none;
          
          &:hover{
            background: #EA233F;
          }

          @media (max-width:1066px) {
            font-size: 1em;
          }

          @media (max-width: 930px) {
        flex-direction: column;
        gap:1.2em;
        font-size: 1.37em;
      }
      @media (max-width: 500px) {
        flex-direction: column;
        gap:1.2em;
        font-size: 1em;
        
      }

        }
      }
    }
  }
`
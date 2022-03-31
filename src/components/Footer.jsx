import React from 'react'
import styled from 'styled-components'
import {AiFillInstagram, AiFillTwitterCircle, AiFillLinkedin, AiFillFacebook} from 'react-icons/ai'
import { HashLink } from 'react-router-hash-link'

const Footer = () => {
  return (
    <StyledFooter id="footer  ">
      <div className="footer-info">
        <div className="footer-info-item">
        <h1>Important Info</h1>
        <p>All classes are held online via Google Meet & Whatsapp Group.</p>
        <p>Class holds twice a week at selected days.</p>
        <p>Each class runs for 2 hrs</p>
        <p>Installment Payment Is Also Available</p>
        </div>
      </div> 
        <div className="footerContainer">
        <div className="firstSection">
        <div className="headText">Satorm</div>
        <div className="footNote">
        Learn the fundamental skills, methodologies,
        and tools you'll need to succeed as a Digital Marketer
        </div>        
        <div className="iconSection">
        <a href='https://instagram.com/satormacademy' className='icon'><AiFillInstagram/></a>
        <div className="icon"><AiFillTwitterCircle/></div>
        <div className="icon"><AiFillLinkedin/></div>
        <div className="icon"><AiFillFacebook/></div>
        </div>
        </div>

        <div className="secondSection">
        <div className="headText">Useful Links</div>
        <div className="list"><HashLink className='navLink' to="/pricing/#basic">Basic</HashLink></div>
        <div className="list"><HashLink className='navLink' to="/pricing/#advanced">Advanced</HashLink></div>
        <div className="list"><HashLink className='navLink' to="/#about">About Us</HashLink></div>
        <div className="list">Contact Us</div>
        </div>
        <div className="thirdSection">
        <div className="headText">Contact Us</div>
        <div className="list">09043541197</div>
        <div className="list">satormacademy@gmail.com</div>   
        </div>

      <div className="mobileView">
      <div className="secondSection">
        <div className="headText">Useful Links</div>
        <div className="list"><HashLink className='navLink' to="/pricing/#basic">Basic</HashLink></div>
        <div className="list"><HashLink className='navLink' to="/pricing/#advanced">Advanced</HashLink></div>
        <div className="list"><HashLink className='navLink' to="/pricing/#about">About Us</HashLink></div>
        <div className="list">Contact Us</div>
        </div>
        <div className="thirdSection">
        <div className="headText">Contact Us</div>
        <div className="list">09043541197</div>
        <div className="list">satormacademy@gmail.com</div>    
        </div>  
        </div>
        </div>
    </StyledFooter>    
  )
}

export default Footer

const StyledFooter = styled.div`
    background-color: #EA233F;
    padding: 5em 12%;
    bottom: 0;

    .footer-info{
      color: #fff;
      font-family: 'Poppins', sans-serif;
      display: flex;
      justify-content: center;
      padding-bottom: 1em;
      .footer-info-item{
        h1{
          font-weight: 800;
          font-size: 2.25em;
        }
        p{
          font-size: 1em;
        }
      }
    }

      .footerContainer{
        display: flex;
        justify-content: space-between;
        @media (max-width: 813px) {
            flex-direction: column;
        }

      }  
    .firstSection{
      
      .headText{
        font-weight: 800;
        font-family: 'Poppins';
        font-size: 2.25em;
        color: #FFFFFF;
        line-height: 120%;
        
      }
      .footNote{
        color: #FFFFFF;
        font-size: 1.125em;
        font-weight: 400;
        line-height: 145%;
        max-width: 29em;
      }
      .iconSection{
        display: flex;

        .icon{
          color: #FFFFFF;
          font-size: 1.68em;
          padding-right: 0.5em;
          
        }
      }
    }
    
    .navLink{
        color: #FFFFFF;
        text-decoration: none;
        cursor: pointer;
    }

    .secondSection{
      @media (max-width: 813px) {
            display: none;
        }
      .headText{
      font-weight: 800;
        font-family: 'Poppins';
        font-size: 1.0em;
        color: #FFFFFF;
        line-height: 120%;
      }

      .list{
        font-size: 1em;
        color: #FFFFFF;
        font-family: 'Poppins';
        line-height: 1.5em;
        padding-bottom: 0.4em;
      }
      
    }

   

    .thirdSection{
      @media (max-width: 813px) {
            display: none;
        }
      .headText{
      font-weight: 800;
        font-family: 'Poppins';
        font-size: 1.0em;
        color: #FFFFFF;
        line-height: 100%;
      }

      .list{
        font-size: 1em;
        color: #FFFFFF;
        font-family: 'Poppins';
        line-height: 1.2em;
        padding-bottom: 0.4em;
      }
    }

    .mobileView{
      display: none;
      @media(max-width: 813px){
        display: flex;
        justify-content: space-between;
     }

     .secondSection{
       display: block;
     }
     .thirdSection{
       display: block;
     }
    }

    
`
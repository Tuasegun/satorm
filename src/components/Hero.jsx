import React from 'react'
import backgroundImg from "../assets/images/background.svg"
import styled from 'styled-components'
import Header from '../components/Header'
import girly from '../assets/images/girly.png'
import {Link} from 'react-router-dom'
const Hero = () => {
  return (
    <HeroStyle>
        <Header/>
        <div className="heroSection">
        <div className="textContainer"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        >
            <div className="textLg ">
                <div className="line">Comprehensive training &</div>
                <div className="line">mentorsip program for</div>
                <div className="line">Digital Marketers</div>
            </div>
            <div className="footnote">
                <p>Learn the fundamental skills, methodologies,</p>
                <p>and tools you'll need to succeed as a Digital Marketer</p>
            </div>
           
              <Link className="enrollButton" to="/pricing">Enroll Now</Link>
            
        </div>

        <div className="imageContainer"
        data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        >
            <div className="imgContainer">
            <img src={girly} alt="" className="girlImg" />
            </div>
            <div className="textFloat1 textBody">100+ trained students</div>
            <div className="textFloat2 textBody">Jobs/Internship opportunities</div>
            <div className="textFloat3 textBody">Become Certified</div>
            <div className="textFloat4 textBody">1-on-1 Mentorship Sessions</div>
        </div>
        </div>
    </HeroStyle>
  )
}

export default Hero

const HeroStyle = styled.section`
    background-image: url(${backgroundImg});
    background-repeat: no-repeat;
    width: 100%;
    background-size: cover;
    .heroSection{
    display: flex;
    padding: 0em 7em 0em 7em;
    align-items: center;
    justify-content: space-between;
        @media(max-width: 840px){
            flex-direction: column;
            padding: 0em 2em 0em 2em;
        }
    }
  
    
    .textContainer{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        .line{
        font-family: 'Poppins', 'sans-serif';
        font-weight: 600;
        color: #0A033C;
        font-style:  normal;
        font-size: 2.813em;
        line-height: 1.3em;
        @media(max-width: 840px){
            font-size: 2.3em;
        }
    }

    .footnote{
        p{
            font-family: 'Poppins';
            font-size: 1.25em;
            
        }
    }

    .enrollButton{
        background: #EA233F;
        color: #FFFFFF;
        font-size: 1.125em;
        font-weight: 600;
        padding: 0.9rem;
        border-radius: 0.5rem;
        margin-top: 0.5rem;
        text-transform: uppercase;
        text-decoration: none;
        cursor: pointer;
    }   

    }



    .imageContainer{
            position: relative;
            height: auto;
            min-width: 22.5em;
            @media(max-width: 630px){
             width: 100%;
            }
            .imgContainer{
                position: static;
                height: auto;
                object-fit: contain;
                img{
            width: 100%;
            height: 100%;   
            }
            
        }
            
        
        .textFloat1{
            position: absolute;
            top: 16rem;
            @media (min-width: 841px) and (max-width: 1055px) {
                top: 11rem;
            }
            @media(max-width: 489px) {
                top: 12rem;
            }
        }
        .textFloat2{
            position: absolute; 
            top: 25rem;
            @media (min-width: 840px) and (max-width: 1270px) {
                top: 21rem;
                left: 0;
            }
            @media (min-width: 841px) and (max-width: 1055px) {
                top: 16rem;
            }
            @media(min-width:490px) and (max-width: 561px) {
                top: 22rem;   
            }
            @media (max-width: 489px) {
                top: 16rem;
             }


        }
        .textFloat3{
            position: absolute;
            right: 0;
            top: 28rem;
            @media (min-width: 840px) and (max-width: 1270px) {
                top: 24rem;
                right:0;
            }
            @media (min-width: 841px) and (max-width: 1055px) {
                top: 19rem;
                right: 0;
            }
            @media (min-width:490px) and (max-width: 561px) {
                top: 25rem;
                right: 0;
             }
             @media(max-width: 489px) {
                top: 20rem;
                right: 0;
            }
        }
        .textFloat4{
            position: absolute;
            right: 0;
            bottom: 8rem;
            @media (min-width: 840px) and (max-width: 1270px) {
                bottom: 5rem;
                right:0;
            }
             @media(max-width: 560px) {
                bottom: 5rem;
                right:0;
            } 
            
            @media (min-width:490px) and (max-width: 561px) {
                bottom: 6rem;
                right:0;
             }
        }

        .textBody{
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(20px);
            border-radius: 1em;
            padding: 0.9em 0.5em;
            font-size: 1.25em;
            font-weight: 600;
            font-family: poppins;
            word-wrap: break-word;

            @media (min-width: 840px) and (max-width: 1270px) {
                font-size: 1em;
                font-weight: 600;
            }

            @media (min-width: 841px) and (max-width: 1055px) {
                font-size: 0.9em;
            }

            @media (min-width:490px) and (max-width: 561px) {
                font-size: 1rem;
             }
             @media (max-width: 489px) {
                font-size: 0.8rem;
             }

        }
    }

`
import React from 'react'
import styled from 'styled-components'
import suitMan from '../assets/images/suitMan.png'

const About = () => {
  return (
    <AboutStyle id="about"
        data-aos="fade-up" 
        data-aos-easing="ease-in-sine"
        data-aos-duration="3000"
        data-aos-delay="200"
        data-aos-once="false"
    
    >
        <div className="headTextContainer"  
        >
            <div className="headText">Become a Digital Marketer with a <span className='yellowText'>High Level of Competence</span></div>
        </div>

        <div className="triBox">
        <div className="textBox">Satorm is developing digital marketers who are responsible for implementing, overseeing, and managing digital marketing strategies that advance an organisation's mission by reaching a broad audience and attaining greater exposure.</div>
        <div className="imageContainer">
        <img src={suitMan} alt="" />
        </div>
        <div className="textBox"> Our goal is to develop a group of people with the necessary skills required for this. Join us as we shape the future right now.
</div>
        </div>
    </AboutStyle>
  )
}

export default About

const AboutStyle = styled.section`
    /* display: flex; */
    margin-top: 5em;
    .headTextContainer{
        margin: auto;
        
        .headText{
            display: flex;
            flex-direction: column;
            align-items: center;
            
            font-family: 'Poppins', sans-serif;
            font-weight: 700;
            font-size:2.25em;
            color:#0A033C;
            line-height: 1.3em;
            text-align: center;
            span.yellowText{
                color:#FAB900;
            }
        }
    }

    .triBox{
        display: flex;
        padding: 3em 7em;
        justify-content: center;
        @media (max-width: 1180px) {
            padding: 2em 1em 2em 1em;
        }
        @media (max-width:900px) {
            padding: 2em 3em 2em 3em;
            flex-direction: column;
        }
        .imageContainer{
            width: auto;
            min-width: 20rem;
            height: auto;
            @media (max-width:900px) {
                min-width: auto;
            }
            
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;    
            }
        }

        .textBox{
            background-color: #EA233F;
            color: #FFFFFF;
            padding: 2em 3em 2em 3em;
            /* max-width: 27rem; */
            width: 27rem;
            height: auto;
            font-size: 1.25em;
            line-height: 2em;
            @media (max-width:900px) {
                width: auto;
                padding: 2em 1em 2em 1em;
            }
        }       
    }
`
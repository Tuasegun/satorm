import React from 'react'
import styled from 'styled-components'
import teacher from '../assets/images/teacher.png'
import yellowBg from '../assets/images/yellowBg.png'
import { Link } from 'react-router-dom'

const Purpose = () => {
  return (
    <PurposeStyle>
       <div className="contentWrapper">
        <div className="imageContainer">
            <img src={teacher} alt="" 
            //   data-aos="fade-right" 
            //   data-aos-easing="ease-in-out"
            //   data-aos-duration="3000"
            //   data-aos-delay="200"
            //   data-aos-once="false"
            />
        </div>
        <div className="textContainer">
            <div className="textLg">Why <span>Satorm</span></div>
            <div className="textMd">Why choose Satorm</div>
            <div className="footNote">
                <ul>
                    <li> Personalized training and mentorship</li>
                    <li>Live online training that is accessible anywhere in the world</li>
                    <li>Affordable tuition fee compared to other institutes</li>
                    <li> Internship opportunities to practically use your knowledge and skill</li>
                    <li>After training support to guide you into the career path</li>
                </ul>
            </div>
            <Link to="/pricing" className="enrollButton">Enroll Now</Link>
        </div>
        </div>
    </PurposeStyle>
  )
}

export default Purpose

const PurposeStyle = styled.section`
    background-image: url(${yellowBg});
    background-repeat: no-repeat;
    width: 100%;
    background-size: cover;
    .contentWrapper{
        display: flex;
        /* align-items:center; */
        column-gap: 5em;
        justify-content: center;    
        padding: 7em 12%;
        @media (max-width: 930px) {
            flex-direction: column;
            padding: 7em 12%;
        }
        .imageContainer{
            max-width: 25em;
            height: 100%;
            
            img{
               height: 100%;
               width: 100%;
               object-fit: cover;     
            }
        }

        .textContainer{
            display: flex;
            flex-direction: column;
            align-items:flex-start;
            /* padding: 0em 0em 0em 0em; */
            .textLg{
                font-family: "Poppins";
                font-style: normal;
                font-weight: bold;
                font-size: 2.125em;
                line-height: 180%;
                color: #0A033C;
                
                span{
                    color:#FAB900;
                }
            }
            .textMd{
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 600;
                font-size: 1.375em;
                color: #0A033C;
                line-height:160%;
                
            }

            .footNote{
                font-family: 'Poppins', sans-serif;
                font-style: normal;
                font-weight: 275;
                font-size: 0.9em;
                color: #696984;
                line-height:160%;
                padding-right:12%;

                ul{
                    list-style-type: none;
                    li{
                        padding: 0.5em 0em;
                    }
                    li::before{
                        content: "-";
                        text-indent: -20px;
                    }
                }
            }

            .enrollButton{
                padding: 0.8em;
                color: #ffffff;
                background-color: #EA233F;
                text-transform: uppercase;
                margin-top: 1.1rem;
                font-weight: 600;
                font-size: 1.125em;
                border-radius: 0.5em;
                text-decoration: none;
            }
        }
    }
   
`
import React from 'react'
import styled from 'styled-components'
import student from "../assets/images/student.png"

const Testimony = () => {
  return (
    <StyledTestimony
    data-aos="fade-up" 
    data-aos-easing="ease-in-sine"
    data-aos-duration="3000"
    data-aos-delay="200"
    data-aos-once="false"  
    >
        <div className="container"> 
       
        <div className="textContainer"
        
        >
        <div className="textLg"><h3>Tes<span>timony</span></h3></div>
            <div className="box">
                <div className='orangeLine'/>
                <div className="mainBox">
                    <p>"Thank you very much for your help. This is exactly what I was looking for. You will not regret it. It really saves me time and effort. Skill is what our business lacked."</p>
                </div>
            </div>
        </div>

            <div className="imageContainer">
                <img src={student} alt="" />
            </div>

        </div>
    </StyledTestimony>
  )
}

export default Testimony

const StyledTestimony = styled.div`
    padding: 7em 7%;
    
    @media (max-width: 930px) {
        padding: 7em 0%;
        }
    .container{
        display: flex;
        z-index: 10;
        @media (max-width: 930px) {
            flex-direction: column;
            padding: 0em 5%;
        }
        .textContainer{
            transform: translate(5em, 7%);
            display: flex;
             flex-direction: column;
             @media (max-width: 930px) {
                transform: translate(0em, 0%);   
            }
            .textLg{
                position: relative;
                
                h3{
                    font-size: 2.125em;
                    font-weight: 700;
                    font-family: 'Poppins';
                    line-height: 3em;
                    color: #0A033C;
                    span{
                        color:#FAB900;
                    }
                }
            }

            .box{
           display: flex;

           .orangeLine{
               content:"";
               background-color: #EA233F;
               padding: 0.2em;
               border-radius: 2em 0em 0em 2em;
           }
                .mainBox{
                    padding: 3em 3.5em ;
                    background-color: #FFFFFF;
                    font-size: 1.375em;
                    font-family: 'Poppins';
                    color: #0A033C;
                    font-weight: 400;
                    border-radius: 0em 1em 1em 0em;

                    @media (max-width: 1079px) {
                        padding: 1.5em;
                    }
                }   
            }
        } 
        
        .imageContainer{
            width: 100%;
            height: 100%;
            img{
               height:100%;
               width: 100%;
               object-fit: cover;
            }
        }
    }
`
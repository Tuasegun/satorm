import React, {useState} from 'react'
import styled from 'styled-components'
import logo from '../assets/images/logo.svg'
import {BiMenu} from 'react-icons/bi'
import {MdOutlineCancel} from 'react-icons/md'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

   const handleToggle = () =>{
        setToggleMenu(!toggleMenu)
    }
    
  return (
    <HeaderStyle>
        <img className='logo'  src={logo} alt="" 
        data-aos="fade-right" 
        data-aos-easing="ease-in-sine"
        data-aos-duration="250"
        data-aos-delay="200"
        />
        <div className="headerItems"
          data-aos="fade-right" 
          data-aos-easing="ease-in-sine"
          data-aos-duration="3000"
          data-aos-delay="200"
        >
            <ul className={toggleMenu === true ? "headerList" : "inactive"}>
            <li className="headerListItem"><HashLink className='navLink' to="/#about">About</HashLink></li>
            <li className="headerListItem"><Link className='navLink' to="/pricing">Plans</Link></li>
            <li className="headerListItem"><HashLink className='navLink' to="/#footer">Contact us</HashLink></li>
            </ul>
        </div>
        <div onClick={handleToggle} >
        {toggleMenu === false ? <BiMenu className='menuIcon'/> : <MdOutlineCancel className='menuIcon'/> }
        </div>
        <div className="headerItems mobile">
            <ul className={toggleMenu === true ? "headerList" : "inactive"}>
            <li className="headerListItem"><HashLink className='navLink' to="/#about">About</HashLink></li>
            <li className="headerListItem"><Link className='navLink' to="/pricing">Plans</Link></li>
            <li className="headerListItem"><HashLink className='navLink' to="/#footer">Contact us</HashLink></li>
            </ul>
        </div>
    </HeaderStyle>
  )
}

export default Header

const HeaderStyle = styled.div`
    display: flex;
    padding: 2em 2em 3em 7em;
    align-items: center;
    .headerItems{
        margin: auto; 
        @media (max-width: 830px) {
              display: none;
            } 
        .headerList{
            list-style-type: none;
            display: flex;
            flex-direction: row;
            @media (max-width: 830px) {
                flex-direction: column;          
                justify-content: space-between;
            }  
            .headerListItem{
                font-family: 'Poppins', sans-serif;
                font-size: 0.9em;
                color: #000000;
                padding-left: 3.125em;   
                
               
            }
       }
       
       .navLink{
                    color: #000000;
                    text-decoration: none;
                }

       .inactive{
           list-style-type: none;
           display: flex;
           flex-direction: row;
           padding-left:3.125em;
        @media(max-width:830px){  
            list-style-type: none;         
            display: none;
            }
        
        }
        .headerListItem{
                font-famiy: 'Poppins', sans-serif;
                font-size: 0.9em;
                color: #000000;
                padding-left: 3.125em;
                @media (max-width: 830px) {
                padding-bottom: 2em;
            
            }
       }
    }

    .mobile{
        display: none;
    }

    .menuIcon{
        font-size: 1.5em;
        display: none;
        position: absolute;
        top: 0;
        right: 0;
        margin: 1.5em;
        @media(max-width:830px){
            display: block;
        }
    }

    @media (max-width: 830px) {
        display: block;
        padding: 2em 2em 3em 2em;
        .mobile{
            display: flex;
            justify-content: center;
            .headerList{
                display: flex;
                flex-direction: column;
            
                
            }
        }

    }
`
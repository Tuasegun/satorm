
import React from 'react'
import About from '../components/About'
import Footer from '../components/Footer'
import GetStarted from '../components/GetStarted'
import Hero from '../components/Hero'
import Purpose from '../components/Purpose'
import Testimony from '../components/Testimony'


const Home = () => {
  return (
    <>
    <Hero  />
    <About />
    <GetStarted/>
    <Purpose/>
    <Testimony/>
    <Footer/>
    </>
  )
}

export default Home
import React from 'react'
import Header from '../components/Header'
import PricingCard from '../components/PricingCard'
import styled from 'styled-components'
import List from '../components/List'
import Footer from '../components/Footer'

const basic = [
    "For beginners and those transitioning into Digital Marketing",
    "Introduction to Digital Marketing; the various fields under digital marketing",
    "Introduction to market research in Digital Marketing",
    "Creating user personals",
    "Introduction to copywriting and content writing",
    "Social media marketing; Instagram, WhatsApp and Facebook marketing",
    "Traffic generation using Facebook ads",
    "Positioning yourself for Internships and APM roles",
    "Certificate of completion"
]

const advanced = [
    "For Intermediate digital marketers  looking to expand their knowledge and scale up their skill",
    "Introduction to Digital Marketing; the various fields under digital marketing",
    "Introduction to market research in Digital Marketing",
    "Creating user personals",
    "Building a one-page webpage with card",
    "SEO; search engine optimisation",
    "Email Marketing and automation",
    "Introduction to copywriting and content writing",
    "Social media marketing; Instagram, WhatsApp, Youtube and Facebook marketing",
    "Traffic generation using Facebook and Instagram ads",
    "Positioning yourself for Internships and APM roles",
    "Certificate of completion"
]

const premium = [
    "For Intermediate digital marketers  looking to expand their knowledge and scale up their skill",
    "Introduction to Digital Marketing; the various fields under digital marketing",
    "Introduction to market research in Digital Marketing",
    "Creating user personal",
    "Building a website, landing pages", 
    "SEO; search engine optimisation",
    "Email Marketing and automation",
    "Introduction to copywriting and content writing",
    "Social media marketing; Instagram, WhatsApp, Youtube, quota, linkedln, Twitter and Facebook marketing",
    "App marketing", 
    "Traffic generation using Facebook and Instagram ads",
    "Google ads & Analytics",
    "Positioning yourself for Internships and APM roles",
    "Certificate of completion"
]

const Pricing = () => {
  return (
    <PricingStyleWrapper>
        <Header/>
        <PricingStyle>
            <PricingCard title="BASIC PROGRAM"
                subtitle="For beginners and those transitioning into Digital Marketing"
                price="₦30,000 for 6 weeks"
            >
                {
                    basic.map((item, index) => {
                        return <List key={index} text={item}></List>
                    }) 
                }
            </PricingCard>
            <PricingCard title="ADVANCED PROGRAM"
                subtitle="For Intermediate digital marketers  looking to expand their knowledge and scale up their skill"
                price="₦60,000 for 9 weeks"
            >
                {
                    advanced.map((item, index) => {
                        return <List key={index} text={item}></List>
                    }) 
                }
            </PricingCard>
            <PricingCard title="PREMIUM CLASS"
                subtitle="For Intermediate digital marketers  looking to expand their knowledge and scale up their skill"
                price="₦100,000 for 3 months"
            >
                {
                    premium.map((item, index) => {
                        return <List key={index} text={item}></List>
                    }) 
                }
            </PricingCard>    
        </PricingStyle>
        <Footer/>
    </PricingStyleWrapper>
  )
}

export default Pricing

const PricingStyleWrapper = styled.div`
    width: 100%;

`
const PricingStyle = styled.div`
         width: 100%;
    max-width: 790px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 4rem;
    margin: 0 auto;
    margin-top: 4rem;
    padding: 0 0 3rem 0;
    @media (max-width: 774px) {
        width: 90%;
        grid-template-columns: repeat(1, 1fr);
        padding: 0rem 5% 3rem 5%;
        
    }
`


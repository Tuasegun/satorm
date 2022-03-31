import React from 'react'
import Header from '../components/Header'
import PricingCard from '../components/PricingCard'
import styled from 'styled-components'
import List from '../components/List'
import Footer from '../components/Footer'

const basic = [
    "Introduction to Digital Marketing; Definition, Terminologies, Media in Digital Marketing, Traditional Marketing, Basic Concept, Traffic",
    "Social Media Marketing; Definition, Platform Selection, Platform Creation/Set up(IG, FB, Twitter, Linkedln, Youtude), Social Media PageManagement",
    "Content Marketing; Definition, information format, Subject line, Creating killer content, Hook, Promise, Offer, Content Calender",
    "Creating user personalsPay Per Click Advertising; FB/IG ADS, Creative, Audience, Budget/Duration, Placement, FB pixels",
    "Email Marketing; Definition, Email Management Tools, List Building, Squeeze Page, Email Writing",
    "Sales Funnel; Customer journey, AIDA marketing model, Sales page",
    "Copywriting; Definition, Know your product, competition, audience & Media, Customer Avatar, Hook, Power words, Guarantees & Formula",
    "Affiliate Marketing; Definition, platforms, Commission/Payment",
    "Certificate of completion"
]

const advanced = [
    "Introduction to Digital Marketing; Definition, types of Digital Marketing ",
    "Website Creation; Domain & Hosting purchase, Building landing pages, building a one page site with carrd.co",
    "SEO; Terminology, Building Blocks, Google Business, One page SEO",
    "Social Media Marketing; Definition, Platform Selection, Platform Creation/Set up(IG, FB, Twitter, Linkedln, Youtude), Social Media Page Management",
    "Social Media Marketing; Definition, Platform Selection, Platform Creation/Set up(IG, FB, Twitter, Linkedln, Youtude), Social Media Page Management",
    "WhatsApp Marketing; Setting up your WhatsApp for business, WhatsApp sales funnels, Advertising with WhatsApp status, Creating WhatsApp customize link, Whatsapp Business Tools",
    "Fundamental of Graphic Design using canva; Canva interface, Tools in canvas, Creating business flyer designs, social media graphic, basic logo design",
    "Facebook/Instagram Ads; Guidelines, Page creation, business as account, ad account, billing, targeting, lead generation ad with a website, lead generation ad without a website, spying on top advertiser",
    "Google ads, Account setup, Search Ads, Display Ads, Video Ads",
    "Content Marketing; Definition, information format, Subject line, Creating killer content, Hook, Promise, Offer, Content Calender",
    "Positioning yourself for Internships and APM roles",
    "Copywriting; Definition, Know your product, competition, audience & Media, Customer Avatar, Hook, Power words, Guarantees & Formula",
    "Certificate of completion"
]


const Pricing = () => {
  return (
    <PricingStyleWrapper>
        <Header/>
        <PricingStyle>
            <PricingCard title="BASIC PROGRAM"
                subtitle="Learn the foundation of Digital Marketing"
                price="₦30,000 for 6 weeks"
                idName='basic'  
            >
                {
                    basic.map((item, index) => {
                        return <List key={index} text={item}></List>
                    }) 
                }
            </PricingCard>
            <PricingCard title="ADVANCED PROGRAM"
                subtitle="Learn the core skills, frameworks and tools needed to become a Digital Marketer"
                price="₦60,000 for 9 weeks"
                idName='advanced'    
            >
                {
                    advanced.map((item, index) => {
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


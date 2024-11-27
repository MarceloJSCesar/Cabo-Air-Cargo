import React from 'react'
import img from "../assets/default/plane.png";
import HomeSection from './sections/HomeSection';
import HowItWorks from './sections/HowItWorks/HowItWorks';
import ContactUs from '../components/ContactUs';
import AboutUs from './sections/AboutUs/AboutUs';
export default function Pages() {
  return (
    <>
      <HomeSection />
      <HowItWorks />
      <AboutUs />
      <ContactUs /> 
      <Footer />
        
    </>
  )
}

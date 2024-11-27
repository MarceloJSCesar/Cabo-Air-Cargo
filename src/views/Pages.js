import React from 'react'
import img from "../assets/default/plane.png";
import Header from './layout/Header';
import HowItWorks from './sections/HowItWorks/HowItWorks';
import ContactUs from '../components/ContactUs';
import AboutUs from './sections/AboutUs/AboutUs';
import Footer from './sections/Footer/Footer';

export default function Pages() {
  return (
    <>
        <Header/>
        <HowItWorks />
        <AboutUs />
        <ContactUs />
        <Footer />
    </>
  )
}

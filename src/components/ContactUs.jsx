import React from 'react';
import { MapPin, Mail } from 'lucide-react';
import { FaInstagram, FaLinkedin} from 'react-icons/fa';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div className="contact_container">
            <div className="MAIN">
<<<<<<< HEAD
                <div className="contact-wrapper">
                    <div className="contacts">
                        <h1 className='title'> Contact Us</h1>
                        <p className='subtitle'>Where Can You <span className="find">Find <span>Us</span></span></p>
                            <div className="socials">
                                <div className="item">
                                    <div className="icon-wrapper">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon"  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00428C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                    </div>
                                    <a href="#">1234 Street Name, US</a>
                                </div>
                                <div className="item">
                                    <div className="icon-wrapper">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon"  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00428C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                                        </div>
                                        <a href="#">Carbo Air Cargo</a>
                                    </div>
                                    <div className="item">
                                        <div className="icon-wrapper">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00428C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                        </div>
                                        <a href="https://www.linkedin.com/company/prendi-cv/">LinkedIn</a>
                                    </div>
                                    <div className="item">
                                        <div className="icon-wrapper">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon"  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00428C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                        </div>
                                    <a href="#">Carbo Air Cargo</a>
                                </div>
                                <div className="mail-us item">
                                <a href="mailto:info@carboaircargo.com" className="mail-button">
                                    Mail Us
                                    <FaEnvelope className="mail-icon" />
                                </a>
                            </div>
                        </div>                    
                    </div>
                    <div className='map'>
                        <img src="map.png" alt="map" className="mapImg"/>
                    </div>
                </div>    
=======
                <div className="contacts">
                    <h1 className="title">Contact Us</h1>
                    <p className="subtitle">
                        Where Can You <span className="find">Find <span>Us</span></span>
                    </p>
                    <div className="socials">
                        <div className="item">
                            <div className="icon-wrapper">
                                <MapPin className="icon" size={24} />
                            </div>
                            <a>Mindelo, Cape Verde</a>
                        </div>
                        
                        <div className="item">
                            <div className="icon-wrapper">
                                <FaLinkedin className="icon" size={24} />
                            </div>
                            <a href="https://www.linkedin.com/company/barlavento-aviation-consulting-solutions/" target="_blank" rel="noopener noreferrer">
                                LinkedIn
                            </a>
                        </div>
                        
                        <div className="item">
                            <div className="icon-wrapper">
                                <FaInstagram className="icon" size={24} />
                            </div>
                            <a href="https://www.instagram.com/barlavento_aviation" target="_blank" rel="noopener noreferrer">
                                Carbo Air Cargo
                            </a>
                        </div>
                        
                        <div className="item">
                            <a href="mailto:info@caboaircargo.com" className="mail-button">
                                Mail Us 
                                <Mail size={20} style={{marginLeft: '6px'}}/>
                            </a>
                        </div>
                    </div>
                </div>
>>>>>>> main
            </div>
        </div>
    );
};

export default ContactUs;
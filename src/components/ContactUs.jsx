import React from 'react';
import { MapPin, Linkedin, Instagram, Mail } from 'lucide-react';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div className="contact_container">
            <div className="MAIN">
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
                                <Linkedin className="icon" size={24} />
                            </div>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                LinkedIn
                            </a>
                        </div>
                        
                        <div className="item">
                            <div className="icon-wrapper">
                                <Instagram className="icon" size={24} />
                            </div>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                Carbo Air Cargo
                            </a>
                        </div>
                        
                        <div className="item">
                            <a href="mailto:info@carboaircargo.com" className="mail-button">
                                Mail Us
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
import { FaLinkedin, FaInstagram, FaFacebook, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div className="contact_container">
            <div className="contacts">
                <h1>Contact Us</h1>
                <h2>Where Can You <span className="find">Find <span>Us</span></span></h2>
                <div className="socials">
                    <div className="item">
                        <FaMapMarkerAlt className="icon" size={40} />
                        <p>1234 Street Name, US</p>
                    </div>
                    <div className="item">
                        <FaFacebook className="icon" size={40} />
                        <a href="#">Carbo Air Cargo</a>
                    </div>
                    <div className="item">
                        <FaLinkedin className="icon" size={40} />
                        <a href="https://www.linkedin.com/company/prendi-cv/">LinkedIn</a>
                    </div>
                    <div className="item">
                        <FaInstagram className="icon" size={40} />
                        <a href="#">Carbo Air Cargo Instagram</a>
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
    );
};

export default ContactUs;

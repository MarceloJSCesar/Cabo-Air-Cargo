import { FaLinkedin, FaInstagram, FaFacebook, FaMapMarkerAlt } from 'react-icons/fa';
import './ContactUs.css';
import LocationMap from './Map';

const ContactUs = () => {
    return (
        <div className="container">
            <div className="contacts">
                <h1>Contact Us</h1>
                <h2>Where You Can Find <span>Us</span></h2>
                <div className="socials">
                    <div className="item">
                        <FaMapMarkerAlt className="icon" size={30} />
                        <p>1234 Street Name, US</p>
                    </div>
                    <div className="item">
                        <FaFacebook className="icon" size={30} />
                        <a href="#">Carbo Air Cargo</a>
                    </div>
                    <div className="item item-3">
                        <FaLinkedin className="icon" size={30} />
                        <a href="#">Carbo Air Cargo LinkedIn</a>
                    </div>
                    <div className="item item-4">
                        <FaInstagram className="icon" size={30} />
                        <a href="#">Carbo Air Cargo Instagram</a>
                    </div>
                </div>
            </div>
            <div className='map'>
                <img src="map.png" alt="map" />
            </div>
        </div>
    );
}

export default ContactUs;

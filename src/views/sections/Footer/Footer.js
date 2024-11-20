import React from 'react';
import './styles.css';
import logo from '../../../assets/default/logo.png';
import { FaInstagram, FaLinkedin, FaFacebook, FaPaperPlane } from 'react-icons/fa';

const Footer = () => {
  return (
	<footer className="footer">
		<div className="footer-logo">
			<div className="footer-logo-container">
				<img src={logo} alt="Logo" className="footer-logo-image" />
				<h3>CABO AIR CARGO</h3>
			</div>
				<p className='footer-description'>Lorem ipsum dolor sit amet consectetur. Eros et aliquam amet aliquet vivamus convallis elit pellentesque</p>
				<div className="footer-social-logos">
					<FaInstagram />
					<FaLinkedin />
					<FaFacebook />
				</div>
	  </div>
	  <div className="footer-links">
		<h3>LINKS</h3>
		<ul>
			<li>Home</li>
			<li>How it works</li>
			<li>About us</li>
			<li>Contacts</li>
		</ul>
		</div>
		<div className="footer-socials">
			<h3><em>SOCIALS</em></h3>
			<ul>
				<li>Facebook</li>
				<li>LinkedIn</li>
				<li>Instagram</li>
			</ul>
		</div>
		<div className="footer-locations">
			<h3>LOCATIONS</h3>
			<ul>
				<li>Cape Verde</li>
				<li>Europe</li>
			</ul>
	 	</div>
		<div className="footer-contact">
			<h3>GET IN TOUCH</h3>
			<p>Question or feedback?</p>
			<button className="footer-contact-button">Mail us <FaPaperPlane /></button>
		</div>
	</footer>
  );
};

export default Footer;

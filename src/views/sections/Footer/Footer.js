import React from 'react';
import './styles.css';
import logo from '../../../assets/default/cac-logo-no-bg.png';
import { FaInstagram, FaLinkedin, FaFacebook, FaPaperPlane } from 'react-icons/fa';

const Footer = () => {
  return (
	<footer className="footer">
		<div className="footer-logo">
			<div className="footer-logo-container">
				<img src={logo} alt="Logo" className="footer-logo-image" />
			</div>
				<h3>CABO AIR CARGO</h3>
				<p className='footer-description'>Let's Make History Together</p>
				<div className="footer-social-logos">
					<a href="https://www.instagram.com/barlavento_aviation" target='_blank'> <FaInstagram /> </a>
					<a href="https://www.linkedin.com/company/barlavento-aviation-consulting-solutions/" target='_blank'> <FaLinkedin /> </a>
					{/* <FaFacebook /> */}
				</div>
	  </div>
	  <div className="footer-links">
		<h3>LINKS</h3>
		<ul>
			<li>Home</li>
			<li>How it works</li>
			<li>About Us</li>
			<li>Contact Us</li>
		</ul>
		</div>
		<div className="footer-socials">
			<h3><em>SOCIALS</em></h3>
			<ul>
				<li> <a href="https://www.instagram.com/barlavento_aviation" target='_blank'> LinkedIn </a></li>
				<li> <a href="https://www.linkedin.com/company/barlavento-aviation-consulting-solutions/" target='_blank'> Instagram </a></li>
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

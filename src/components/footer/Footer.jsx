import React from 'react';
import "./footer.css";
import { FiInstagram, FiGithub, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Gurteg Singh</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>
            </ul>
            <div className="footer__social">
                <a href="https://www.instagram.com/gurteg._singh?igsh=MTc0MXl5eGhkeWYxdA%3D%3D&utm_source=qr" className="home__social-icon" target="_blank" rel="noreferrer">
                    <FiInstagram />
                </a>
                <a href="https://www.github.com/guriiiiii" className="home__social-icon" target="_blank" rel="noreferrer">
                    <FiGithub />
                </a>
                <a href="https://www.linkedin.com/in/gurteg-s1ngh/" className="home__social-icon" target="_blank" rel="noreferrer" >
                    <FiLinkedin />
                </a>    
            </div>
            <span className="footer__copy"></span>
        </div>
    </footer>
  );
}

export default Footer;
import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Tiara</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#skills" className="footer__link">Skill</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Portfolio</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://instagram.com/tiaraarista_" className="footer__social-link" rel="noreferrer" target='_blank'>
                    <i class="bx bxl-instagram"></i>
                </a>
                <a href="https://github.com/tiaraarista" className="footer__social-link" rel="noreferrer" target='_blank'>
                    <i class="bx bxl-github"></i>
                </a>
                <a href="https://twitter.com/tiaraarista_" className="footer__social-link" rel="noreferrer" target='_blank'>
                    <i class="bx bxl-twitter"></i>
                </a>
            </div>
            <span className="footer__copy">&#169; Tiara Arista Hasanah. All rigths reserved</span>
        </div>
    </footer>
  )
}

export default Footer
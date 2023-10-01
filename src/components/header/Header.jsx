import React, { useState } from 'react';
import './header.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../home/Home';
import About from '../about/About';
import Skill from '../Skills/Skills';
import Service from '../services/Services';
import Portfolio from '../portfolio/Portfolio';
import Contact from '../contact/Contact';

const Header = () => {
  window.addEventListener("scroll", function(){
    const header = document.querySelector(".header");
    //when the scroll is higher than 80
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  
  // /* ============== Toggle Menu ============== */
  const[Toggle, showMenu] = useState(false)
  const [activeNav, setActiveNav] = useState("#home");
  return (
    // <header className="header">
    //   <nav className="nav container">
    //     <a href="index.html" className="nav__logo">Tiara</a>

    //     <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
    //       <ul className="nav__list grid">
    //         <li className="nav__item">
    //           <a href="#home" onClick={()=>setActiveNav('#home')} className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
    //             <i className="uil uil-estate nav__icon"></i>
    //             Home
    //           </a>
    //         </li>
            
    //         <li className="nav__item">
    //           <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
    //             <i className="uil uil-user nav__icon"></i>
    //             About
    //           </a>
    //         </li>
            
    //         <li className="nav__item">
    //           <a href="#skills" onClick={()=>setActiveNav('#skills')} className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}>
    //             <i className="uil uil-file-alt nav__icon"></i>
    //             Skills
    //           </a>
    //         </li>
            
    //         <li className="nav__item">
    //           <a href="#services" onClick={()=>setActiveNav('#services')} className={activeNav === "#services" ? "nav__link active-link" : "nav__link"}>
    //             <i className="uil uil-briefcase-alt nav__icon"></i>
    //             Services
    //           </a>
    //         </li>
            
    //         <li className="nav__item">
    //           <a href="#portfolio" onClick={()=>setActiveNav('#portfolio')} className={activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"}>
    //             <i className="uil uil-scenery nav__icon"></i>
    //             Portfolio
    //           </a>
    //         </li>
            
    //         <li className="nav__item">
    //           <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
    //             <i className="uil uil-message nav__icon"></i>
    //             Contact
    //           </a>
    //         </li>
    //       </ul>

    //       <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
    //     </div>

    //     <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
    //     <i className="uil uil-apps"></i>
    //     </div>
    //   </nav>
    // </header>
    <Router>
    <header className="header">
     <nav className="nav container">
              <a href="index.html" className="nav__logo">Tiara</a>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
            <ul className="nav__list nav__item grid">
              <Link to="/" onClick={()=>setActiveNav('/home')} className={activeNav === "/home" ? "nav__link active-link" : "nav__link"}>Home</Link>
              <Link to="/about" onClick={()=>setActiveNav('/about')} className={activeNav === "/about" ? "nav__link active-link" : "nav__link"}>About</Link>
              <Link to="/skill" onClick={()=>setActiveNav('/skill')} className={activeNav === "/skill" ? "nav__link active-link" : "nav__link"}>Skill</Link>
              <Link to="/services" onClick={()=>setActiveNav('/services')} className={activeNav === "/services" ? "nav__link active-link" : "nav__link"}>Services</Link>
              <Link to="/portfolio" onClick={()=>setActiveNav('/portfolio')} className={activeNav === "/portfolio" ? "nav__link active-link" : "nav__link"}>Portfolio</Link>
              <Link to="/contact" onClick={()=>setActiveNav('/contact')} className={activeNav === "/contact" ? "nav__link active-link" : "nav__link"}>Contact</Link>
            </ul>
            <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/services" element={<Service />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default Header;
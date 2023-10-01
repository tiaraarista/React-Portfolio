import React from 'react';
import "./about.css";
import Info from './Info';

const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My Introduction</span>

        <div className="about__container container grid">
            <div alt="Tiara Arista" className="about__img"></div>
            <div className="about__data">
                <Info/>

                <p className="about__description">
                    Graduated from Bachelor of Applied Informatics Engineering on PHB Tegal. I'm IT
                    Enthusiast especialy Web Developer, UI Ddesign, and Software Developer.
                </p>

                <a href="https://docs.google.com/document/d/1G2Mq-Ex3qTT5h_dUvGn-1gn6YEX9oUkUAQ7uOBci5hY/edit?usp=sharing" className="button button--flex">
                    Download CV
                    <i className="uil uil-file-download-alt button__icon"></i>
                </a>
            </div>
        </div>
    </section>
  )
}

export default About
import React, { useState } from 'react';
import "./qualification.css"

const Qualification = () => {
    const[toggleState, setTogelState] = useState(1);

    const toggleTab = (index) => {
        setTogelState(index);
    }
  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">

                <div onClick={()=>toggleTab(1)} className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i>{""}
                    Experience
                </div>

                
                <div onClick={()=>toggleTab(2)} className= {toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}>
                    <i className="uil uil-graduation-cap qualification__icon"></i>{""}
                    Education
                </div>
            </div>

            <div className="qualification__section">
                <div className={toggleState === 1 ?"qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Entry Data Operator</h3>
                            <span className="qualification__subtitle">Badan Pusat Statistik</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>July - September 2023
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Web Developer - Internship</h3>
                            <span className="qualification__subtitle">Dieng Cyber</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>July - August 2019
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className={toggleState === 2 ?"qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Bachelor of Applied in Informatics Engineering</h3>
                            <span className="qualification__subtitle">PHB Tegal</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>2021
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification
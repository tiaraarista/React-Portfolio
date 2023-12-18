import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';


const ProjectItems = ({item}) => {
  const[toggleState, setTogelState] = useState(0);

    const toggleTab = (id) => {
        setTogelState(id);
    }
  return (
    <div className="project__card" key={item.id} >
      <div className="card__header">
        <img src={item.image} alt="" className="project__img" onClick={()=>toggleTab(item.id)}/>
      </div>
        <h3 className="project__title">{item.title}</h3>
        {/* <span className="project__button" onClick={()=>toggleTab(item.id)}>View More<i className="uil uil-arrow-right project__button-icon"></i></span> */}
        {/* <a href={item.link} className="project__button" rel="noreferrer" target='_blank'>Demo<i className="bx bx-right-arrow-alt project__button-icon"></i></a> */}
        <a href={item.link} rel="noreferrer" target="_blank" className="button button--flex">Demo</a>
        <div className={toggleState === 1 ? "project__modal active-modal" : "project__modal"}>
            <div className="project__modal-content">
                <i onClick={() => toggleTab(0)} className="uil uil-times project__modal-close"></i>
                <h3 className="project__modal-title">{item.title}</h3>
                <p className="project__modal-description">
                    Used to Publish Personal Portfolio
                </p>

                <Swiper loop={true} grabCursor={true} spaceBetween={24} pagination={{ clickable: true, }} breakpoints={{
                    576: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 1,
                      spaceBetween: 48,
                    },
                  }} modules={[Pagination]}>
                    
                    <SwiperSlide className="modal__card">
                      <img src={item.more1} alt="" className="project__img" />
                    </SwiperSlide>
                    <SwiperSlide className="modal__card">
                      <img src={item.more2} alt="" className="project__img" />
                    </SwiperSlide>
                    <SwiperSlide className="modal__card">
                      <img src={item.more3} alt="" className="project__img" />
                    </SwiperSlide>
                    <SwiperSlide className="modal__card">
                      <img src={item.more4} alt="" className="project__img" />
                    </SwiperSlide>
                    <SwiperSlide className="modal__card">
                      <img src={item.more5} alt="" className="project__img" />
                    </SwiperSlide>
                    <SwiperSlide className="modal__card">
                      <img src={item.more6} alt="" className="project__img" />
                    </SwiperSlide>

                </Swiper>
            </div>
        </div> 

        <div className={toggleState === 2 ? "project__modal active-modal" : "project__modal"}>
            <div className="project__modal-content">
                <i onClick={() => toggleTab(0)} className="uil uil-times project__modal-close"></i>
                <h3 className="project__modal-title">{item.title}</h3>
                <p className="project__modal-description">
                    An endless Run Game using Unity C#
                </p>

                <Swiper loop={true} grabCursor={true} spaceBetween={24} pagination={{ clickable: true, }} breakpoints={{
                    576: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 1,
                      spaceBetween: 48,
                    },
                  }} modules={[Pagination]}>
                    
                    <SwiperSlide className="modal__card">
                      <img src={item.more1} alt="" className="project__img" />
                    </SwiperSlide>
                    <SwiperSlide className="modal__card">
                      <img src={item.more2} alt="" className="project__img" />
                    </SwiperSlide>
                    <SwiperSlide className="modal__card">
                      <img src={item.more3} alt="" className="project__img" />
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>     

        <div className={toggleState === 3 ? "project__modal active-modal" : "project__modal"}>
            <div className="project__modal-content">
                <i onClick={() => toggleTab(0)} className="uil uil-times project__modal-close"></i>
                <h3 className="project__modal-title">{item.title}</h3>
                <p className="project__modal-description">
                    Augmented Reality to Introduce Study Program on PHB using Unity C# and Vuforia Package
                </p>

                <Swiper loop={true} grabCursor={true} spaceBetween={24} pagination={{ clickable: true, }} breakpoints={{
                    576: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 1,
                      spaceBetween: 48,
                    },
                  }} modules={[Pagination]}>
                    
                    <SwiperSlide className="modal__card">
                      <img src={item.more1} alt="" className="project__img" />
                    </SwiperSlide>
                    <SwiperSlide className="modal__card">
                      <img src={item.more2} alt="" className="project__img" />
                    </SwiperSlide>
                    <SwiperSlide className="modal__card">
                      <img src={item.more3} alt="" className="project__img" />
                    </SwiperSlide>
                    <SwiperSlide className="modal__card">
                      <img src={item.more4} alt="" className="project__img" />
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>     

        <div className={toggleState === 4 ? "project__modal active-modal" : "project__modal"}>
            <div className="project__modal-content">
                <i onClick={() => toggleTab(0)} className="uil uil-times project__modal-close"></i>
                <h3 className="project__modal-title">{item.title}</h3>
                <p className="project__modal-description">
                    Point of Sales System (Cashier) using Java Netbeans and MySQL
                </p>

                <Swiper loop={true} grabCursor={true} spaceBetween={24} pagination={{ clickable: true, }} breakpoints={{
                    576: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 1,
                      spaceBetween: 48,
                    },
                  }} modules={[Pagination]}>
                    
                    <SwiperSlide className="modal__card">
                      <img src={item.more1} alt="" className="project__img" />
                    </SwiperSlide>
                    <SwiperSlide className="modal__card">
                      <img src={item.more2} alt="" className="project__img" />
                    </SwiperSlide>
                    <SwiperSlide className="modal__card">
                      <img src={item.more3} alt="" className="project__img" />
                    </SwiperSlide>
                    <SwiperSlide className="modal__card">
                      <img src={item.more4} alt="" className="project__img" />
                    </SwiperSlide>
                    <SwiperSlide className="modal__card">
                      <img src={item.more5} alt="" className="project__img" />
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>     

        <div className={toggleState === 5 ? "project__modal active-modal" : "project__modal"}>
            <div className="project__modal-content">
                <i onClick={() => toggleTab(0)} className="uil uil-times project__modal-close"></i>
                <h3 className="project__modal-title">{item.title}</h3>
                <p className="project__modal-description">
                    Tic Tac Toe using PHP HTML with Minimax
                </p>

                <Swiper loop={true} grabCursor={true} spaceBetween={24} pagination={{ clickable: true, }} breakpoints={{
                    576: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 1,
                      spaceBetween: 48,
                    },
                  }} modules={[Pagination]}>
                    
                    <SwiperSlide className="modal__card">
                      <img src={item.more1} alt="" className="project__img" />
                    </SwiperSlide>
                    <SwiperSlide className="modal__card">
                      <img src={item.more2} alt="" className="project__img" />
                    </SwiperSlide>
                    <SwiperSlide className="modal__card">
                      <img src={item.more3} alt="" className="project__img" />
                    </SwiperSlide>
                    <SwiperSlide className="modal__card">
                      <img src={item.more4} alt="" className="project__img" />
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>    

        <div className={toggleState === 6 ? "project__modal active-modal" : "project__modal"}>
            <div className="project__modal-content">
                <i onClick={() => toggleTab(0)} className="uil uil-times project__modal-close"></i>
                <h3 className="project__modal-title">{item.title}</h3>
                <p className="project__modal-description">
                    Ping Pong 2D
                </p>

                <Swiper loop={true} grabCursor={true} spaceBetween={24} pagination={{ clickable: true, }} breakpoints={{
                    576: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 1,
                      spaceBetween: 48,
                    },
                  }} modules={[Pagination]}>
                    
                    <SwiperSlide className="modal__card">
                      <img src={item.more1} alt="" className="project__img" />
                    </SwiperSlide>
                    <SwiperSlide className="modal__card">
                      <img src={item.more2} alt="" className="project__img" />
                    </SwiperSlide>
                    <SwiperSlide className="modal__card">
                      <img src={item.more3} alt="" className="project__img" />
                    </SwiperSlide>
                    <SwiperSlide className="modal__card">
                      <img src={item.more4} alt="" className="project__img" />
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>  

        <div className={toggleState === 7 ? "project__modal active-modal" : "project__modal"}>
            <div className="project__modal-content">
                <i onClick={() => toggleTab(0)} className="uil uil-times project__modal-close"></i>
                <h3 className="project__modal-title">{item.title}</h3>
                <p className="project__modal-description">
                    Ping Pong 2D
                </p>

                <Swiper loop={true} grabCursor={true} spaceBetween={24} pagination={{ clickable: true, }} breakpoints={{
                    576: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 1,
                      spaceBetween: 48,
                    },
                  }} modules={[Pagination]}>
                    
                    <SwiperSlide className="modal__card">
                      <img src={item.more1} alt="" className="project__img" />
                    </SwiperSlide>
                    <SwiperSlide className="modal__card">
                      <img src={item.more2} alt="" className="project__img" />
                    </SwiperSlide>
                    <SwiperSlide className="modal__card">
                      <img src={item.more3} alt="" className="project__img" />
                    </SwiperSlide>
                    <SwiperSlide className="modal__card">
                      <img src={item.more4} alt="" className="project__img" />
                    </SwiperSlide>
                    <SwiperSlide className="modal__card">
                      <img src={item.more5} alt="" className="project__img" />
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>  
    </div>
  );
}

export default ProjectItems
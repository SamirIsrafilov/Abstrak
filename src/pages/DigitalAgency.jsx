import React from 'react';
import img1 from "../img/others/bubble-39.png";
import img2 from '../img/banner/window.png';
import img3 from '../img/banner/laptop-poses.png';
import img4 from '../img/banner/chat-group.png';
import img5 from '../img/others/line-9.png'
import ServicesCard from '../components/ServicesCard';
import servicesdata from '../data/servicesdata';

import SlideChange from '../components/SlideChange';




const DigitalAgency = () => {
  return (
    <div>
      <section className='banner'>
        <img src={img1} alt="" className='position-absolute top-0 start-0' id='top_circle' />
        <div className="container text-center">
          <div className="row">
            <div className="col-12 col-sm-6 banner_left">
              <h1>Build beautiful website & mobile apps.</h1>
              <p id="banner_text">Create live segments and target the right people for messages<br /> based on their behaviors.</p>
              <button>Get Started</button>
            </div>
            <div className="col-12 col-sm-6 banner_right">
              <div className='d-flex justify-content-center align-items-center' id="chat_back">

                <img src={img4} alt="chat-group" />
              </div>
              <img src={img2} alt="banner_window" id='banner_window' />
              <img src={img3} alt="laptop-poses" id='laptop-poses' />
            </div>
          </div>
        </div>
      </section>

      <section className='services'>
        <div className='container' id='services_text'>
          <img id='line' src={img5} alt="" />
          <h5>What We Can Do For You</h5>
          <h1>Services we can help you<br /> with</h1>
          <p>Nulla facilisi. Nullam in magna id dolor blandit rutrum<br /> eget vulputate augue sed eu imperdiet.</p>
        </div>
        <div className='container d-flex flex-wrap' >
          {servicesdata.map((fd) => {
            return <ServicesCard icon={fd.icon} title={fd.title} desc={fd.desc}  />
          })}
        </div>
      </section>

      <div className='mt-5'>
        <SlideChange />
      </div>






    </div>


  )
}

export default DigitalAgency
import React, { useState, useEffect } from 'react'
import "./about-card.css"
import AOS from 'aos';
import 'aos/dist/aos.css';


function AboutCard({heading, paragraph ,reverseProp, color_one, color_two ,img_text}) {

  useEffect(()=>{
    AOS.init({duration:700})
  })
  

  return (
    <div>
      {
        reverseProp===false ?
        <div className='about-card-container df' >
        <div className='box-2 box' data-aos="fade-right">
           <div className='color-card' style={{background: `radial-gradient(${color_one},${color_two})`,boxShadow:`0px 0px 150px ${color_one}`}} >
           <img src={`${img_text}`}/>
           </div>
           <div className='card-bg-circle' >
           </div>
        </div>
        <div className='box-1 box' >
           <h1 data-aos="fade-left">{heading}</h1>
           <p data-aos="fade-left">{paragraph}</p>
        </div>
    </div>
         :
    <div className='about-card-container dfrc' data-aos="fade-left" data-aos-delay="300">
        <div className='box-1 box' >
           <h1 data-aos="fade-right" data-aos-delay="200">{heading}</h1>
           <p data-aos="fade-right" data-aos-delay="200">{paragraph}</p>
        </div>
        <div className='box-2 box' >
           <div className='color-card' style={{background: `radial-gradient(${color_one},${color_two})`,boxShadow:`0px 0px 150px ${color_one}`}}>
            <img src={`${img_text}`}/>
           </div>
           <div className='card-bg-circle' ></div>
        </div>
    </div>
      }
    </div>
  )
}

export default AboutCard
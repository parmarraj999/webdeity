import React,{useEffect} from 'react'
import Home from '../home/home'
import Service from '../services/Service'
import "../services/service.css"
import About from '../about-section/about'
import Process from '../our-process/process'
import Experience from '../experience/experience'
import Contact from '../../layouts/contact-home/contact'
import Footer from '../footer/footer'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Main() {


  useEffect(()=>{
    AOS.init({duration:700})
  })

  return (
    <div>
      <Home />
      <Service />
      <div className="background-black" data-aos="fade"></div>
      <About />
      <div className="background-black-down" ></div>
      <Process />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}

export default Main
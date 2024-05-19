import React,{useEffect} from 'react'
import './contact.css'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {

  useEffect(()=>{
    AOS.init({duration:700})
  })

  return (
    <div className='black-bg' >
      <div className='contact-blue-container' >
        <h2 data-aos="fade-down">Have A Project ?</h2>
        <button data-aos="fade-down">
          <Link to="/contact" className='link'>Contact</Link>
        </button>
      </div>
    </div>
  )
}

export default Contact
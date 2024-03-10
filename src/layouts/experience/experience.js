import React,{useEffect} from 'react'
import './experience.css'
import Header from '../../component/header/header'
import Button from '../../component/button/Button'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Experience() {

  useEffect(()=>{
    AOS.init({duration:700})
  })

  return (
    <div className='experience-home-container' >
      <div className='experience-width-container'>
        <div data-aos="fade-right">
        <Header first_word="O" first_letter="ur" second_word="E" second_letter="xperience" />
        </div>
        <p data-aos="fade-right" data-aos-delay="200">By driving digital potential at every step of business lifecycle, we mean creating powerful user-centered design solutions and branding for complex systems, apps, and websites. We utilize clients’ business knowledge and our industry expertise to tackle any design challenge.</p>
        <div className='project-block-container' >
          <div className="block-1 block" data-aos="fade-right" data-aos-delay="400" >
            <h2>01</h2>
            <img src='../../image/img-exp-1.jpg' />
          </div>
          <div className='block-container'>
            <div className='block-flex'>
              <div className='block' data-aos="fade-left" data-aos-delay="400" >
                <h2>02</h2>
                <img src='../../image/img-exp-2.jpg' />
              </div>
              <div className='block' data-aos="fade-left" data-aos-delay="500">
                <h2>03</h2>
                <img src='../../image/img-exp-3.jpg' />
              </div>
            </div>
            <div className='block-flex'>
              <div className='block' data-aos="fade-left" data-aos-delay="600">
                <h2>04</h2>
                <img src='../../image/img-exp-4.jpg' />
              </div>
              <div className='block' data-aos="fade-left" data-aos-delay="700">
                <h2>05</h2>
                <img src='../../image/img-exp-5.jpg' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
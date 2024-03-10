import React,{useEffect} from 'react'
import "./about.css"
import AboutCard from '../../component/about-card/about-card'
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {

  useEffect(()=>{
    AOS.init({duration:700})
  })

  return (
    <div className='about-home-container' data-aos="fade">
        <div className='about-home-width'>
          <div className='about-main-heading' >
            <h1 data-aos="fade-up" >Who Are We ?</h1>
            <h2 data-aos="fade-up" data-aos-delay="100">How to Deliver Perfection</h2>
            <p  data-aos="fade-up" data-aos-delay="150">At Brand Vision, our primary goal is achieving outstanding results for our clients.   Our adaptive team offers a broad range of marketing services, custom-tailored to each client's unique needs. By continuously updating our strategies with the latest marketing trends, we ensure effective engagement with various customer groups. Our dedicated approach often surpasses client expectations, fostering a tradition of success and satisfaction. </p>
          </div>
          <AboutCard reverseProp={true}
          heading="Our Commitment to Client Satisfaction at Web Deity" 
          paragraph="At Web Deity, we ensure our clients are never disappointed with their projects. With more than 250 5-star reviews, client satisfaction is our top priority. We assign a dedicated account manager to each client for clear communication, aiming to always deliver great results." 
          img_text="../../image/card-img.png"
          />
          <AboutCard 
          reverseProp={false} color_one="#00D008" color_two="#6FFF75" 
          heading="With More Than 50 Projects Done" 
          paragraph="Having completed 50 projects, at Web Deity, we now only take on projects we are truly passionate about and sure we can excel in. Our experienced team understands various industries well, helping us tailor solutions to your brand and ensure great results. Our selective approach ensures that our enthusiasm drives success in every project we undertake." 
          img_text="../../image/card-img1.png"
          />
          <AboutCard 
          reverseProp={true} color_one="#0D7AE5" color_two="#0047FF" 
          heading="A Decade of Marketing Excellence at Web Deity" 
          paragraph="With over a decade of experience, Web Deity operates globally, delivering outstanding marketing materials in branding, web design, and more. Our skilled team works closely with clients to create memorable brand identities and engaging websites. Our long-standing expertise helps us understand and meet the unique needs of businesses worldwide, ensuring they stand out in the market."
          img_text="../../image/card-img2.png"
          />
        </div>
    </div> 
  )
}

export default About
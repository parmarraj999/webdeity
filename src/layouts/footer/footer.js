import React, { useEffect } from 'react'
import "./footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Footer() {

    useEffect(() => {
        AOS.init({ duration: 700 })
    })

    return (
        <div className='footer-container' >
            <div className='footer-width-container' >
                <div className='footer-logo' data-aos="fade" data-aos-delay="300">
                    <img src='../../image/logo.png' />
                    <div className='social-link' >
                        <a href='https://www.instagram.com/wdwebdeity06/' data-aos="fade-down" data-aos-delay="400">
                            <div><FontAwesomeIcon icon={faInstagram} /></div>
                        </a>
                        <a href='https://www.facebook.com/profile.php?id=100081493117677' data-aos="fade-down" data-aos-delay="500">
                            <div><FontAwesomeIcon icon={faFacebook} /></div>
                        </a>
                        <a href='https://wa.me/917773850820' data-aos="fade-down" data-aos-delay="600">
                            <div><FontAwesomeIcon icon={faWhatsapp} /></div>
                        </a>
                    </div>
                </div>
                <div className='footer-nav'>
                    <h2 data-aos="fade-right" data-aos-delay="300">Design by</h2>
                    <p data-aos="fade-right" data-aos-delay="500">Location</p>
                    <p data-aos="fade-right" data-aos-delay="600">industries</p>
                    <p data-aos="fade-right" data-aos-delay="700">use cases</p>
                    <p data-aos="fade-right" data-aos-delay="800">services</p>
                </div>
                <div className='footer-nav' >
                    <h2  data-aos="fade-right" data-aos-delay="900">company</h2>
                    <p  data-aos="fade-right" data-aos-delay="1000">case study</p>
                    <p  data-aos="fade-right" data-aos-delay="1100">portoflio</p>
                    <p  data-aos="fade-right" data-aos-delay="1200">careers</p>
                    <p  data-aos="fade-right" data-aos-delay="1300">contact</p>
                </div>
                <div className='footer-contact' >
                    <h1 data-aos="fade-right" data-aos-delay="1300">Let's Build something <br></br> great</h1>
                    <h1 style={{ color: "#0d7ae5" }} >Let's Talk </h1>
                    <p>+91 7773850820</p>
                    <p>+91 7389414403</p>
                </div>
            </div>
            <div style={{
                width:"90%",
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                fontSize:'12px',
                color:"grey",
                marginTop:"1.2rem"
            }} >
            © Copyright Webdeity. All right reserved.
            </div>
        </div>
    )
}

export default Footer
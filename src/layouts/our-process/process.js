import React, { useState, useEffect } from 'react'
import "./process.css"
import Header from '../../component/header/header'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Process() {

    const [title, setTitle] = useState("1. Empathize");
    const [para, setPara] = useState("Deep user empathy is essential at the beginning of every project. We use a curated list of research methodologies customized to the needs of each project.");

    function handleText(title, para) {
        setTitle(title)
        setPara(para)
    }
    useEffect(() => {
        AOS.init({ duration: 700 })
    })

    return (
        <div className='process-container' >
            <div className='process-width-container' >
                <div data-aos="fade-right" >
                    <Header first_word="O" first_letter="ur" second_word="P" second_letter="rocess" />
                </div>
                <div className='process-flex' >
                    <div className='process-bg-img' data-aos="fade-right" >
                        <div className='process-img-container'>
                            <img src='../../image/logo.png' />
                        </div>
                    </div>
                    <div className='process-content' data-aos="fade-left" >
                        <div className='process-nav' >
                            <h2 data-aos="fade-down" data-aos-delay="300"
                                onClick={() => handleText("1. Empathize", "Deep user empathy is essential at the beginning of every project. We use a curated list of research methodologies customized to the needs of each project.")}
                            >Empathize</h2>
                            <h2 data-aos="fade-down" data-aos-delay="400"
                                onClick={() => handleText("2. discuss", " We discuss with client about project to develop them according to client requirement and this part is very special for us because we create memories with client as a project")}
                            >Discuss</h2>
                            <h2 data-aos="fade-down" data-aos-delay="500"
                                onClick={() => handleText("3. Develop", " We have a Experienced developing team We develop project with full concentration and security because our client is our first priority ")}
                            >Develop</h2>
                            <h2 data-aos="fade-down" data-aos-delay="600"
                                onClick={() => handleText("4. Test", "Our testing process is very unique first we host the site then start testing with live result if we found any bug we fix them under 12 hours.")}
                            >Test</h2>
                        </div>
                        <div className='process-text' >
                            <h1 data-aos="fade-left" data-aos-delay="700">{title}</h1>
                            <p  data-aos="fade-left" data-aos-delay="800">{para}</p>
                            <button  data-aos="fade-left" data-aos-delay="400">
                                Contact
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Process
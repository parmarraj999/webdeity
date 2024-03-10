import React from 'react'
import "./home.css"
import Button from '../../component/button/Button';
import { motion } from 'framer-motion';

function Home() {
  console.log("home")

  return (
    <div className='main-container'
    >
      <motion.div className='home-container'
        animate={{ opacity: 1, background: "linear-gradient(180deg, #0d7ae599, transparent)" }}
        initial={{ opacity: 0, background: "white" }}
        transition={{ duration: .4, delay: 1.1 }}
      >
        <div>
          <motion.h2
            animate={{ y: "0px", opacity: 1 }}
            initial={{ y: "-50px", opacity: 0 }}
            transition={{ duration: .5, delay: 1.3 }}
          >we are</motion.h2>
          <motion.h1
            animate={{ y: "0px", opacity: 1 }}
            initial={{ y: "-50px", opacity: 0 }}
            transition={{ duration: .5, delay: 1.5 }}
          >web <span>d</span>eity</motion.h1>
          <motion.h3
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: .5, delay: 1.7 }}
          >build <span>'n</span> infinity and beyond</motion.h3>
        </div>
        <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: .5, delay: 1.9 }}
        >
          <Button Text="Let's Talk ->" color="#0d7ae5" />
        </motion.div>
        <motion.div className='triple-icon-container'
        animate={{  opacity: 1 }}
        initial={{  opacity: 0 }}
        transition={{ duration: .5, delay: 2 }}
        >
          <img src='../../image/triple-down-icon.png' />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Home
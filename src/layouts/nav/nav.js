import React, { useEffect, useState } from 'react'
import "./nav.css"
import { NavLink } from 'react-router-dom'
import Button from '../../component/button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import MobileNav from '../../component/mobileNav/MobileNav'
import { motion } from 'framer-motion'

function Nav() {

  const [navToggle, setNavToggle] = useState(false);

  return (
    <motion.div className='nav-container'
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: .5 }}
    >
      <div className='nav'>
        <motion.div
          animate={{ y: "0px", opacity: 1 }}
          initial={{ y: "-50px", opacity: 0 }}
          transition={{ duration: .5, delay: 0.5 }}
        >
          <img src="../../image/logo.png" />
        </motion.div>
        <ul>
          <motion.div
            animate={{ y: "0px", opacity: 1 }}
            initial={{ y: "-50px", opacity: 0 }}
            transition={{ duration: .5, delay: 0.8 }}
          >
            <NavLink className="navlink" >Cards</NavLink>
          </motion.div>
          <motion.div
            animate={{ y: "0px", opacity: 1 }}
            initial={{ y: "-50px", opacity: 0 }}
            transition={{ duration: .5, delay: 0.9 }}
          >
            <NavLink className="navlink" > <span></span> Work</NavLink>
          </motion.div>
          <motion.div
            animate={{ y: "0px", opacity: 1 }}
            initial={{ y: "-50px", opacity: 0 }}
            transition={{ duration: .5, delay: 1 }}
          >
            <NavLink className="navlink" > <span></span> Pricing</NavLink>
          </motion.div>
          <motion.div
            animate={{ y: "0px", opacity: 1 }}
            initial={{ y: "-50px", opacity: 0 }}
            transition={{ duration: .5, delay: 1.1 }}
          >
            <NavLink className="navlink" > <span></span> Contact</NavLink>
          </motion.div>
        </ul>
        <div style={{ display: "flex", gap: ".8rem", alignItems: "center" }} >
          {
            navToggle ? ""
              :
              <motion.div
                animate={{ y: "0px", opacity: 1 }}
                initial={{ y: "-50px", opacity: 0 }}
                transition={{ duration: .5, delay: 0.6 }}
              >
                <Button link="Contact" Text="Book A Call" />
              </motion.div>
          }
          {
            navToggle ?
              <FontAwesomeIcon className='menu-icon' icon={faClose} style={{ fontSize: "1.8rem", color: "white" }} onClick={() => setNavToggle(false)} />
              :
              <>
                <motion.div
                  animate={{ y: "0px", opacity: 1 }}
                  initial={{ y: "-50px", opacity: 0 }}
                  transition={{ duration: .5, delay: .7 }}
                >
                  <FontAwesomeIcon className='menu-icon' icon={faBars} style={{ fontSize: "1.8rem", color: "white" }} onClick={() => setNavToggle(true)} />
                </motion.div>
              </>
          }
        </div>
        {
          navToggle ?
            <MobileNav />
            : ""
        }
      </div>
    </motion.div>
  )
}

export default Nav
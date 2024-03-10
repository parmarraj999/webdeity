import React, { useState } from 'react'
import "./nav.css"

function Nav() {

    const[toggle,setToggle] = useState(false);

  return (
    <div className='nav-container' >
      <div className='logo' >
        <img src='../../image/logo.png'/>
        <div className='line-v' ></div>
        <h3>Sheryians<br></br>Coding School</h3>
      </div>
      <div className='menu-icon' >
         <div className='toggle' onClick={()=>setToggle(!toggle)}>
            <span className={toggle ? "span-rotate-reverse span" : " span"}></span>
            <span className={toggle ? "span-rotate span" : "span-menu span"}></span>
         </div>
      </div>
    </div>
  )
}

export default Nav
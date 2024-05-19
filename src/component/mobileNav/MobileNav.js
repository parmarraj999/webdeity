import React from 'react'
import "./mobilenav.css"
import { Link } from 'react-router-dom'
import Button from '../button/Button'

function MobileNav() {
  return (
    <div className='mobile-nav' >
        <ul>
            <Link className='mobile-link'>Wedding Cards</Link>
            <Link className='mobile-link'>Work</Link>
            <Link className='mobile-link'>Pricing</Link>
            <Link className='mobile-link'>Contact</Link>
            <Button Text="Book a Call" />
        </ul>
    </div>
  )
}

export default MobileNav
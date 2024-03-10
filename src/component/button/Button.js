import React from 'react'
import { Link } from 'react-router-dom'
import "./button.css"

function Button({ link ,Text,color}) {
  return (
    <div className='button' >
        <Link className='link' to={`${link}`} style={{color:color}}>{Text}</Link>
    </div>
  )
}

export default Button
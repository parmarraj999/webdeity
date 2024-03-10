import React, { useState } from 'react'
import "./menu.css"
import { Link } from 'react-router-dom'

function Menu() {

    const[cursorX,setCursorX] = useState();
    const[cursorY,setCursorY] = useState();

    window.addEventListener("mousemove",(e)=>{
        setCursorX(e.pageX)
        setCursorY(e.pageY)
    })

    return (
        <div className="menu-container">
            <div className='main-menu'>
                <div className='menu-1 menu'>
                    <h4>Social</h4>
                    <ul>
                        <li>youtube</li>
                        <li>instagram</li>
                        <li>discord</li>
                        <li>linkedin</li>
                        <li>facebook</li>
                    </ul>
                </div>
                <div className='menu-2 menu'>
                    <h4>Menu</h4>
                    <ul>
                        <Link className='menuLink' to="/">Home</Link>
                        <Link className='menuLink' to="/course">Course</Link>
                        <Link className='menuLink' to="/sign-in">Sign-in</Link>
                    </ul>
                </div>
            </div>
            <div className='cursor'
            style={{
                left:cursorX + "px",
                top:cursorY + "px"
            }}
            >

            </div>
        </div>
    )
}

export default Menu
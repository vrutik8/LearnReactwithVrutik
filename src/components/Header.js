import React, { useState } from 'react'
import {LOGO_URL} from '../utils/constants'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

   const[loginReact,setLoginReact] = useState("login")

    return(
            <div className="header">
                <div className="logo-container">
                    <img className="logo" src={LOGO_URL} alt="err" />
                </div>
                <div className="nav-items">
                    <ul>
                        <li><Link to ="/">Home</Link></li>
                        <li><Link to ="/about">ABOUT</Link></li>
                        <li><Link to ="/contact">CONTACT</Link></li>
                        <li><Link to ="/cart">CART</Link></li>
                        <button className='login'
                            onClick={()=>{
                                loginReact === "login" ?
                                setLoginReact("logout") :
                                setLoginReact("login") 
                                // console.log(btnName);
                            }}
                        >{loginReact}</button>
                    </ul>
                </div>
            </div>
    )
}

export default Header
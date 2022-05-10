import { ArrowDropDown, Notifications, Search } from '@mui/icons-material'
import React from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css"
import "./Navbar-js.js"

const Navbar = () => {
  return (
    <div id='Navbar'>
        <div className="logo"></div>

        <div className="nav">
            <Link to="/series" className='link'>
            <span className='nav-items'>Home</span>
            </Link>
            <Link to="/series" className='link'>
            <span className='nav-items'>Series</span>
            </Link>
            <Link to="/movies" className='link'>
            <span className='nav-items'>Movies</span>
            </Link>
            <span className='nav-items'>New and Popular</span>
            <span className='nav-items'>My List</span>
        </div>

        <div className="account">
            <Search/>
            <Notifications/>
            <div className="user-img"></div>
            <div className="dropDown-content">
                <ArrowDropDown id="drop-arrow" />
                <div className="dropdown">
                    <span>Settings</span>
                    <span>Logout</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
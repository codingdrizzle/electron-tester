import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
// import logo from '../assets/oval,png'

const Navbar = () => {
    return (
        <nav>
            <Link to={'/'} className='company-name'>
                <div className="logo"></div>
                {/* <img src={logo} alt="app logo" width={70} /> */}
                DESIGNO
            </Link>
            <div className='nav-links'>
                <Link className='nav-link'>our company</Link>
                <Link className='nav-link'>locations</Link>
                <Link className='nav-link'>contact</Link>
            </div>
        </nav>
    )
}

export default Navbar
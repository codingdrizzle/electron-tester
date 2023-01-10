import React from 'react'
import Logo from '../commons/logo'
import Navbar from './navbar'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className='footer'>
          <nav>
              <Logo color='#fff' />
              <div className='nav-links'>
                  <Link className='nav-link link-light'>our company</Link>
                  <Link className='nav-link link-light'>locations</Link>
                  <Link className='nav-link link-light'>contact</Link>
              </div>
          </nav>
          
    </footer>
  )
}

export default Footer
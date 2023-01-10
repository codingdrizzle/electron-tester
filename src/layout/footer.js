import React from 'react'
import Logo from '../commons/logo'
import Navbar from './navbar'
import { Link } from 'react-router-dom'
import { IoLogoWhatsapp } from 'react-icons/io'
import { BsFacebook, BsTwitter, BsYoutube, BsPinterest } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
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
            <div className='footer-details'>
                <div className='location-details'>
                    <p style={{fontWeight: 800}}>Designo Central Office</p>
                    <p>3886 Wellington Street</p>
                    <p>Toronto, Ontario M9C 3J5</p>
                </div>
                <div className='contact-details'>
                    <p style={{fontWeight: 800}}>Contact Us (Central Office)</p>
                    <p>P : +1 253-863-8967</p>
                    <p>M : contact@designo.co</p>
                </div>
                <div className='social-media'>
                    <IoLogoWhatsapp size={40}/>
                    <BsFacebook size={40}/>
                    <BsTwitter size={40}/>
                    <BsYoutube size={40}/>
                    <BsPinterest size={40}/>
                    <AiFillInstagram size={40}/>
                </div>
            </div>
        </footer>
    )
}

export default Footer
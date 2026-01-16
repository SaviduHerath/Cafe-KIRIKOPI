import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img className="logo" src={assets.logo} alt="" />
                <p>Fresh ingredients. Cozy atmosphere. Great coffee. Cafe KIRIKOPI is your everyday stop for quality flavors and good vibes</p>
                <div className="footer-social-icon">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />

                </div>
            </div>

            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+94-71-0675-594</li>
                    <li>saviduherath2003@gmail.com</li>
                </ul>
            </div>

        </div>
        <hr/>
        <p className="footer-copyright">Cafe KIRIKOPI ☕ Made with love & fresh coffee.</p>
    </div>
  )
}

export default Footer
import React from 'react'
import './Footer.css'
import { FaYoutube, FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="nav-links">
            <div className="nav-link">
                <h1>schoolio</h1>
            </div>
            <div className="nav-link">
                <ul>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                </ul>
            </div>
            <div className="nav-link">
                <FaYoutube className='icon' />
                <FaInstagram className='icon' />
                <FaFacebook className='icon' />
                <FaTiktok className='icon' />
            </div>
        </div>

        <p>@ 2023 Schoolio Learning Corp. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Footer

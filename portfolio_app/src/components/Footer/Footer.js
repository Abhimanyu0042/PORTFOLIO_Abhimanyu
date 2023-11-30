import React from 'react';
import "./Footer.scss";
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer'>
        <div className="copyright-text">
            <p>Copyright©2023.All rights are reserved</p>
        </div>
        <div className="social-links">
        <li>
                <a href="https://github.com/Abhimanyu0042">
                <FaInstagram/>
                </a>
            </li>
            <li>
                <a href="https://github.com/Abhimanyu0042">
                <FaGithub/>
                </a>
            </li>
            <li>
                <a href="https://github.com/Abhimanyu0042">
                <FaLinkedinIn/>
                </a>
            </li>
        </div>
    </div>
  )
}

export default Footer
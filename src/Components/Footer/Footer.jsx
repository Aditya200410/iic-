import React from 'react';
import "./Footer.css";
import { LuFacebook, LuTwitter, LuInstagram, LuYoutube } from 'react-icons/lu';
import { CiLinkedin } from 'react-icons/ci';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="firstHeading">
            <p>IDEA INNOVATION CELL</p>
        </div>

        <div className="emailLine">
            <input type="email" placeholder="Enter Your Email" />
            <button>Subscribe</button>
        </div>

        <div className='links'>
        <a href="#" className="icon-link">
          <i className="icon lu Lu-facebook"><LuFacebook /></i>
        </a>
        <a href="#" className="icon">
          <i className="icon ci Ci-linkedin"><CiLinkedin /></i>
        </a>
        <a href="#" className="icon">
          <i className="icon lu Lu-twitter"><LuTwitter /></i>
        </a>
        <a href="#" className="icon">
          <i className="icon lu Lu-instagram"><LuInstagram /></i>
        </a>
        <a href="#" className="icon">
          <i className="icon lu Lu-youtube"><LuYoutube /></i>
        </a>
      </div>

      <div className='lastLine'>
        <div className='left-paragraphs'>
          <p className='para1'>&copy; Copyright IIC</p>
          <p className='para2'>All Rights Reserved</p>
        </div>
        <div className='rightmostParagraph'>
          <p>Designed by Team IIC</p>
        </div>
      </div>
      
    </div>
  )
}

export default Footer

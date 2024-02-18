import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

import {
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import Mau from './More About Us/mau.jsx';

function AppIcon({ mouseX }) {
  const ref = useRef(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() || { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [40, 100, 40]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="aspect-square w-10 rounded-full bg-gray-400"
    />
  );
}

const Home = () => {

  return (
    <div>
      <div className="container">
        <div className="grid grid-three-column">
          <div className="leftColumn">
            <div className="image">
              <img src="./images/logo1.png" alt="logo1" />
            </div>
          </div>
          <div className="middleColumn">
            <Link to="/register" className="explore-link">
              <p className="paragraph">
                Join For Induction
              </p>
            </Link>
          </div>
          <div className="rightColumn">
            <div className="image">
              <img src="./images/logo2.png" alt="logo2" width={300} height={300}/>
            </div>
          </div>
        </div>
      </div>

      <div className="secondPara">
        <p>Without us Physics is just a Theory</p>
      </div>

      <div className='sliderPara'>
      <h1 className='sliderHeading'>More About Us</h1>
      </div>
    
        <Mau />

      <div className='contactDiv'>
        <h1 className='contactHeading'>Contact Us</h1>
        <p className='contactPara'>For any queries feel free to contact us</p>
      </div>

      <div className='row'>
        <div className="column1">
          <iframe id='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3712.307661071156!2d83.90060797536815!3d21.495665871578318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a213d331c974a99%3A0x820462ec2236fa60!2sIDEA%20INNOVATION%20CELL%2C%20VSSUT%2C%20Burla!5e0!3m2!1sen!2sin!4v1698391287679!5m2!1sen!2sin" 

          style={{ border: 0 }}
          title='map' 
          allowfullscreen=""
          className='map1' 

          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

          <div className="column2">
            <form>
              <div className="formGroup">
                <input type="text" id="name" name="name" placeholder="Your Name" className="nameAndEmail" />

                <input type="email" id="email" name="email" placeholder="Your Email" className="nameAndEmail" />
              </div>

              <div className="formGroup">
                <input type="text" id="subject" name="subject" placeholder="Subject" />
              </div>
              <div className="formGroup">
                <textarea id="message" name="message" placeholder="Message"></textarea>
              </div>
              <button type="submit">Send Message</button>
            </form>

          <div className='subRow'>
            <div className='subColumn1'>
              <div className='subSubColumn1'>
                <div className='emailIcon'>
                  <img src='./images/mail.png' alt='mailLogo' />
                </div>
                  <p className='emailPara'>Email Us</p>
                  <p className='emailLink'><a href = "mailto: iic.vssut@gmail.com">iic.vssut@gmail.com</a></p>
                </div>
            </div>

            <div className='subColumn2'>
              <div className='subSubColumn2'>
                <div className='callIcon'>
                <img src='./images/call.png' alt='callLogo' />
                </div>
                  <p className='callPara'>Call Us</p>
                  <p className='callLink1'><a href="tel:+918328843197">+91 8328843197</a></p>
                  <p className='callLink2'><a href="tel:+917608009484">+91 7608009484</a></p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
  );
};

export default Home;

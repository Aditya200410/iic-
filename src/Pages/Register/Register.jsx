import React, { useState } from "react";

import "./register.css";
import Contact from '../Contact/Contact';
const Register = () => {
  
  return (
    <div className="main">
      <div className="page1">
        <div className="back">
          <div className="info">
            <h3>Join our Induction Programme 2024</h3>
            <h3>Be a part of the Idea Innovation Cell !</h3>
            <div className="bt">
             <a href="/form"> <button className="getstarted">get started</button></a>
             <a > <button className="watchvideo">watch video</button></a>
             
            </div>
           
          </div>
        </div>
      </div>
      <div className="page2">
        <div className="ind">
          <div className="title"><h1>INDUCTION 2024</h1>
          <div className="ab">
            "Innovation is the ability to see change as an opportunity" Idea
            Innovation Cell , the official Idea Club of VSSUT, Burla , is a
            cluster of young technophiles,scientific enthusiasts and
            techpreneurs who are on an expedition to serve the nation.Focused to
            build-up products in enlightening the everyday difficulties of the
            community,We are delighted to launch the Official Induction
            programme for the year 2023! Click on the link below to register for
            the Induction programme.
          </div>
          </div>
          <button class="glow-on-hover" type="button">Register Now!</button>
          <div className="details">
            A brief description about the Induction Programme. Kindly go through
            the pdf for more information .....
          </div>
          <button className="pdf">
            {" "}
            <a
              href="https://www.ideainnovationcell.org/Induction%202023/Images/IIC%20INDUCTION.docx.pdf"
              target="_blank"
            >
              get details
            </a>
          </button>
        </div>
      </div>
      <div className="page3">
        <div className="brag">
          <div className="a">
            <div className="img">
              <img src="" alt="" />
            </div>
            <div className="number">10+ </div>
            <div className="text">projects</div>
          </div>
          <div className="a">
            <div className="img">
              <img src="" alt="" />
            </div>
            <div className="number">200+</div>
            <div className="text">active member</div>
          </div>
          <div className="a">
            <div className="img">
              <img src="" alt="" />
            </div>
            <div className="number">500+</div>
            <div className="text">alumini</div>
          </div>
          <div className="a">
            <div className="img">
              <img src="" alt="" />
            </div>
            <div className="number">10+</div>
            <div className="text">prizes</div>
          </div>
        </div>
      </div>
      <div className="tpage4">
        
        <div className="contactus"><h1>CONTACT US</h1></div>
       <div className="in">For help in any kind of Query related to the  Induction-2024 you may contact :</div>
       

    <Contact/>
       
      </div>
    </div>
  );
};

export default Register;

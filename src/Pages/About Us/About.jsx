import React from 'react';


import img1 from './iicforever.jpg';
import "./About.css";
const About = () => {
    return (
    <div className='Container'>
        <h1 className='aboutHeading'>About Us</h1>
        <div className='AboutContainer'>
            <div class="card">
            <div class="AboutPic">
                <img src={img1} />
            </div> 
            </div>
            <div class="card">
            <div className='AboutInfo'>
                <p>VSLV (VSSUT Satellite Launching Vehicle), is a student initiative, in which our team of budding technocrats take on a herculean task of developing an Indigenous Sounding Rocket and PicoSAT, by venturing into Rocket Science, through a series of ten arduous missions. A one-of-its-kind, it is India’s First Indigenous Multipurpose Reusable Student Rocketry Project, that aims to build, launch, test and recover indigenously developed Launch Vehicles and Prototype Satellites in order to provide an educational experience to students in design, flight and data analysis of a space experiment. It is intended to prepare students for an exciting, technical challenge that may lead to launching space experiments into low earth orbits and beyond.</p>
            </div> 
            </div>
            </div>
        </div>
    )
}

export default About;


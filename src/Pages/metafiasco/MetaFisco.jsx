import React from 'react'
import "./metafisco.css";
import iic from "./iic.png"
import Contact from '../Contact/Contact';
const MetaFisco = () => {
  return (
    <>

    <div className="meta">
        <div className="meta1">
            <img className="metaimage" src={iic} alt="" />
        </div>


        <div className="meta2">
            <div className="metaright">
            <div className="h">ABOUT</div>
<div className="metaabout">
About Once you have tasted flight, you will forever walk the earth with your eyes turned skyward, for there you have been, and there you will always long to return. Have you ever been curious to explore the darkest night, the flying machines, the bright blue sky and often draw a lot about them? Then put on your belts to tumble over the enticing thrill and madness for the love of space science and technology. Idea Innovation Cell, the official Idea Club of VSSUT, Burla is all set to conduct freshmen's orientation "CIELO INIFINITO" on 17th February 2024. Join us for something special that will give you a spine-chilling experience.


</div>

            </div>
            <div className="metaleft">
            <div className="h">WHERE</div>
<div className="where">SIR VISVESWARAYA AUDITORIUM
VSSUT, Burla</div>
<div className="h">WHEN</div>
<div className="when">17th February 2024 at 3:00PM</div>

            </div>
        </div>
        <div className="metaticket">

<button className='metabtn'><a href='/ticket'>GET YOUR FREE TICKET</a> </button>

        </div>
       
    </div>
    <div className="contactus"><h1>CONTACT US</h1></div>
       <div className="in">For help in any kind of Query related to the  Induction-2024 you may contact :</div>
       

    <Contact/>
    
    
    
    </>
  )
}

export default MetaFisco
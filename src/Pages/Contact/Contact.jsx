
import React from 'react';
import "./Contact.css";
import img1 from "./debankar.png";
import img2 from "./sandip.png";
import img3 from "./satviki.png";


const Contact = () => {
    return (
        <div className='ContactContainer'>
            <div className='CardContainer'>
                <div className='ContactCard'>
                    <div className='UserPicture'>
                        <img className='imc' src={img1} alt='User 1' />
                    </div>
                    <p className='UserName'>Debankar  Shubhram
                        <span>Secretary<br /> Idea Innovation Cell
                        </span>
                        <span className='sp'>6372777905<br /> debankarshubhram@gmail.com
                        </span>
                    </p>
                     
                </div>
                <div className='ContactCard'>
                    <div className='UserPicture'>
                        <img className='imc' src={img2} alt='User 2' />
                    </div>
                    <p className='UserName'>Sandip Kr.  Mohanty
                        <span>Ast.Secretary<br /> Idea Innovation Cell
                        </span>
                        <span className='sp'>6371409570
<br /><span className='sp'>sandip.mohanty2004@gmail.com</span> 
                        </span>
                        
                    </p>
                     
                </div>
            </div>
            <form method='post' className='ContactForm'>
            <div className='ContactCard'>
                    <div className='UserPicture'>
                        <img src={img3} alt='User 2' />
                    </div>
                    <p className='UserName'>Satviki Pradhan
                        <span>Asst.Secretary<br /> Idea Innovation Cell
                        </span>
                        <span className='sp'>8847800176
<br /><span className='sp'>satviki.pradhan@gmail.com</span> 
                        </span>
                    </p>
                     
                </div>
            </form>
        </div>
    );
};

export default Contact;


import React from 'react';
import "./Contact.css";
import img1 from "./debankar.png";
import img2 from "./sandip.png";
import img3 from "./satviki.png";
import insta from "./instagram.png";
import linkedin from "./linkedin.png";

const Contact = () => {
    return (
        <div className='ContactContainer'>
            <div className='CardContainer'>
                <div className='ContactCard'>
                    <div className='UserPicture'>
                        <img className='imc' src={img1} alt='User 1' />
                    </div>
                    <p className='UserName'>Debankar 
                        <span>Secretary<br /> Idea Innovation Cell
                        </span>
                    </p>
                    <div className='SocialMedia'>
                        <a href='https://www.instagram.com/space_researcher1'><img src={insta} className='SocialBtn' alt='Instagram' /></a>
                        <a href='https://www.linkedin.com/in/debankar-shubhram-8025ab238/'><img src={linkedin} className='SocialBtn' alt='LinkedIn' /></a>
                    </div>   
                </div>
                <div className='ContactCard'>
                    <div className='UserPicture'>
                        <img className='imc' src={img2} alt='User 2' />
                    </div>
                    <p className='UserName'>sandip
                        <span>Ast.Secretary<br /> Idea Innovation Cell
                        </span>
                    </p>
                    <div className='SocialMedia'>
                        <a href='https://www.instagram.com/missmohanty__'><img src={insta} className='SocialBtn' alt='Instagram' /></a>
                        <a href="https://www.linkedin.com/in/sandip-kumar-mohanty-6b1582232?trk=contact-info"><img src={linkedin} className='SocialBtn' alt='LinkedIn' /></a>
                    </div>   
                </div>
            </div>
            <form method='post' className='ContactForm'>
            <div className='ContactCard'>
                    <div className='UserPicture'>
                        <img src={img3} alt='User 2' />
                    </div>
                    <p className='UserName'>satkviki
                        <span>Ast.Secretary<br /> Idea Innovation Cell
                        </span>
                    </p>
                    <div className='SocialMedia'>
                        <a href='https://www.instagram.com/missmohanty__'><img src={insta} className='SocialBtn' alt='Instagram' /></a>
                        <a href='https://www.linkedin.com/in/amisha-mohanty-2452b91a0/'><img src={linkedin} className='SocialBtn' alt='LinkedIn' /></a>
                    </div>   
                </div>
            </form>
        </div>
    );
};

export default Contact;


import React from 'react';
import "./Contact.css";
import img1 from "./img3.jpg";
import img2 from "./img18.jpg";
import insta from "./instagram.png";
import linkedin from "./linkedin.png";

const Contact = () => {
    return (
        <div className='ContactContainer'>
            <div className='CardContainer'>
                <div className='ContactCard'>
                    <div className='UserPicture'>
                        <img src={img1} alt='User 1' />
                    </div>
                    <p className='UserName'>Subhransu Ranjan Das
                        <span>Secretary<br /> Idea Innovation Cell
                        </span>
                    </p>
                    <div className='SocialMedia'>
                        <a href='https://www.instagram.com/space_researcher1'><img src={insta} className='SocialBtn' alt='Instagram' /></a>
                        <a href='https://www.linkedin.com/in/subhransuranjandas/'><img src={linkedin} className='SocialBtn' alt='LinkedIn' /></a>
                    </div>   
                </div>
                <div className='ContactCard'>
                    <div className='UserPicture'>
                        <img src={img2} alt='User 2' />
                    </div>
                    <p className='UserName'>Amisha Mohanty
                        <span>Secretary<br /> Idea Innovation Cell
                        </span>
                    </p>
                    <div className='SocialMedia'>
                        <a href='https://www.instagram.com/missmohanty__'><img src={insta} className='SocialBtn' alt='Instagram' /></a>
                        <a href='https://www.linkedin.com/in/amisha-mohanty-2452b91a0/'><img src={linkedin} className='SocialBtn' alt='LinkedIn' /></a>
                    </div>   
                </div>
            </div>
            <form method='post' className='ContactForm'>
                <h1>Contact Here</h1>
                <input type='text' name='name' placeholder='Name' />
                <input type='text' name='subject' placeholder='Subject' />
                <textarea name='message' cols='30' rows='18' placeholder='Message' />
                <button type='submit'>Send</button>
            </form>
        </div>
    );
};

export default Contact;

import React from 'react'
import "./waterbucket.css";
import Contact from '../Contact/Contact';
const Waterbucket = () => {
  return (
    <div className="main">
    <div className="page1">
      <div className="back">
        <div className="info">
          <h3>Join our Water bucket 2024</h3>
          <h3>Be a part of the event !</h3>
          <div className="bt">
           <a href="/form"> <button className="getstarted">get started</button></a>
           <a > <button className="watchvideo">watch video</button></a>
           
          </div>
         
        </div>
      </div>
    </div>
    <div className="page2">
      <div className="ind">
        <div className="title"><h1>Water bucket 2024</h1>
        <div className="ab">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos laudantium est libero incidunt optio exercitationem autem inventore architecto, voluptate eius officia eligendi corporis vitae, magni perspiciatis repudiandae ratione eum! Minima enim aperiam id, laborum optio eligendi, facilis voluptas consequatur aliquid beatae fuga quam nostrum quis, quia sapiente magni? Aliquid hic numquam maxime placeat tempora dignissimos illo! Odit veritatis vitae esse.
        </div>
        </div>
        <button class="glow-on-hover" type="button">Register Now!</button>
        <div className="details">
          A brief description about the event .....
        </div>
        <button className="pdf">
          {" "}
          <a
            href=""
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
  )
}

export default Waterbucket;
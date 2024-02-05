import React from 'react'
import "./Mau.css"
const Mau = () => {
  return (
    <>
<div className="Mcontainer">
    
    <div className="slide_div" id="slide_1" onClick ={() => {window.location.href = "/Achievements"}}>
        <img className="imgCd" src="./images/sliderlogo1.png" alt="" id="img1"/>
       
        <p id="content">Achievements</p>
    </div>
    <div className="slide_div" id="slide_2" onClick={() => {window.location.href="/Objectives"}}>
        <img className="imgCd" src="./images/sliderlogo2.png" alt=""  id="img2"/>
        <p id="content">Objectives</p>
    </div>
    <div className="slide_div" id="slide_3" onClick={() => {window.location.href="/Appreciation"}}>
        <img className="imgCd" src="./images/apprc.png" alt=""id="img3"/>
        <p id="content">Appreciation</p>
    </div>
    <div className="slide_div" id="slide_4" onClick={() => {window.location.href="/Projects"}}>
        <img className="imgCd" src="./images/sliderlogo4.png" alt=""id="img4"/>
        <p id="content">Projects Done</p>
    </div>
    <div className="slide_div" id="slide_5" onClick={() => {window.location.href="/event"}}>
        <img className="imgCd" src="./images/sliderlogo5.png" alt=""id="img5"/>
        <p id="content">Events</p>
    </div>
    <div className="slide_div" id="slide_7" onClick={() => {window.location.href="/gallery"}}>
        <img className="imgCd" src="./images/gallery.png" alt=""id="img7"/>
        <p id="content">Gallery</p>
    </div>
    <div className="slide_div" id="slide_6" onClick={() => {window.location.href="/media"}}>
        <img className="imgCd" src="./images/media.png" alt="" id="img6"/>
        <p id="content">Media Coverage</p>
    </div>
    
</div>
</>
  )
}

export default Mau
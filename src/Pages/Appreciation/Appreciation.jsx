import React from "react";
import "./Appreciation.css";
const Appr = () => {
  return (
    <>
      <div className="head">
        <p>Appreciation</p>
      </div>
      <div className="parent">
        <div className="middle">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/uqSnmGTfVK8?si=caNjqkMm0J-m-3Ud"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div className="child">
            <p>Hon'ble Prime Minister Of India-</p>
            <h1>Mr. NARENDRA MODI</h1>
            <p>
              Featured in Mann ki baat - 27 January 2019 Hon'ble Prime Minister
              of India (PMO) spoke about our Team and Achievements, Mann ki Baat
              is an Indian programme hosted by Hon'ble Prime Minister Narendra
              Modi in which he addresses the people of the nation on All India
              Radio.
            </p>
          </div>
        </div>
      </div>
      <div className="parent">
        <div className="middle">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/WMob4A6V4DM?si=NRa3uunNKd0ONc4V"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="child">
          <p id="mona">
            Hon'ble Union Minister of Petroleum & Natural Gas and Steel-
          </p>
          <h1 id="monali">Sri DHARMENDRA PRADHAN</h1>
          <p>
            Hon'ble Union Minister of Petroleum & Natural Gas and Steel, Shri
            Dharmendra Pradhan spoke about Team VSLV of VSSUT Burla (Odisha) at
            the National Startup Conclave organised in New Delhi, by Odisha
            Corporate Foundation and MSME (Govt of India)
          </p>
        </div>
      </div>
      <div className="parent">
        <div className="middle">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/OjItY39tl1k?si=cGPAsDi_D36wPex6"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="child">
          <p>Chairperson of the Indian Space Research Organisation(ISRO)-</p>
          <h1>Dr. K.SIVAN</h1>
          <p>
            Chairperson of the Indian Space Research Organisation(ISRO)-DR.
            K.SIVAN speaks about openning an Inncubation center at VSSUT,BURLA.
          </p>
        </div>
      </div>
      <div className="parent">
        <div className="middle">
          <video controls src="video1.mp4" width="100%" height="100%"></video>
        </div>
        <div className="child">
          <p>
            Commissioner cum Secretary, Skill Development and Technical
            Education Department and Information & Public Relation Department,
            Government of Odisha -
          </p>
          <h1>IAS Sanjay Singh</h1>
          <p>Appreciation for our team VSSUT Satellite Launch Vehicle</p>
        </div>
      </div>
      <div className="parent">
        <div className="middle">
          <video controls width="100%" height="100%">
            <source src="video2.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="child">
          <p>Chairperson of the Indian Space Research Organisation(ISRO)-</p>
          <h1>Dr. K.SIVAN</h1>
          <p>
            Highest Level of Commendation to our team VSSUT Satellite Launch
            Vehicle
          </p>
        </div>
      </div>
    </>
  );
};

export default Appr;


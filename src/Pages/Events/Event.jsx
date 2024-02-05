
import React, { useEffect, useState } from "react";
import './event.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Event() {

    const data = [
      {
        heading:`META FIASCO`,
        content:` About Once you have tasted flight, you will forever walk the earth with your eyes turned skyward, for there you have been, and there you will always long to return. Have you ever been curious to explore the darkest night, the flying machines, the bright blue sky and often draw a lot about them? Then put on your belts to tumble over the enticing thrill and madness for the love of space science and technology. Idea Innovation Cell, the official Idea Club of VSSUT, Burla is all set to conduct freshmen's orientation "META-FIASCO" on 4th February 2023 at E-Learning Centre. Join us for something special that will give you a spine-chilling experience.`,
        src:`https://www.ideainnovationcell.org/meta_fiasco/poster.jpeg`
      },
      {
          heading:`AEROVANTAGE 2023`,
          content:` Aerovantage is a unique and engaging webinar series designed to shed light on the world of drone-based start-ups and entrepreneurship. Over the course of five webinars, participants will have the opportunity to hear from successful founders and experts in the drone industry, who will share their experiences, challenges, and provide valuable advice. Click on the link below to register for the webinar.`,
          src:`https://www.ideainnovationcell.org/Aerovantage%202023/Images/induction-poster.png`
      },
      {
          heading:`INDUCTION 2023`,
          content:` Innovation is the ability to see change as an opportunity" Idea Innovation Cell , the official Idea Club of VSSUT, Burla , is a cluster of young technophiles,scientific enthusiasts and techpreneurs who are on an expedition to serve the nation.Focused to build-up products in enlightening the everyday difficulties of the community,We are delighted to launch the Official Induction programme for the year 2023! Click on the link below to register for the Induction programme.`,
          src:`https://www.ideainnovationcell.org/Induction%202023/Images/induction-poster.png`
      },
      {
          heading:`INNOVEISTA`,
          content:` Hola Folks! Finally, the most cherished moment has arrived. To introduce the techno-enthusiasts with the world of imagination, ideas, creativity and creation, Idea Innovation Cell, the official innovation cell of VSSUT Burla, sets forth its epitome orientation programme, "INNOVIESTA 2022"! So be ready for the waves of unique tech-adventures as it is high time to unleash the innovator within you. Do join us on 12th February at 5.30pm for a remarkable experience with the zeal of innovation!`,
          src:`https://www.ideainnovationcell.org/innoviesta-2022/img/innoviesta%202022.jpg`
      },
      {
          heading:`P.I.E.S`,
          content:` Amidst the quarantine, Idea Innovation Cell VSSUT, Burla, organized the first ever webinar of the PIES series on "Intellectual Property Rights" for the students to enhance their interest in copyrights, patents, trademarks and trade secrets. The adepts in this field, Som Patra Sir (Founder of Kalinga Legal Services) and Abinash Kumar Puhan Sir (Group A gazetted officer, Intellectual property office) were the speakers in this technical caucus. Idea Innovation Cell heartily thanks both the speakers who enlightened the colloquy about intellectual property rights and patents, all the guests present in this convention as well as the technophile students who attended the webinar and made it a success. However the show has just begun, Stay tuned for the road ahead!`,
          src:`https://www.ideainnovationcell.org/assets/slides/block.jpg`
      },
      {
          heading:`Hack For COVID 19`,
          content:` As humanity struggles to extinguish the spreading fire of the deadly COVID 19, Idea Innovation Cell, VSSUT, Burla organised an online hackathon HACK FOR COVID 19, an instrument of innovation to pierce through the darkness veiling mankind. A first of its kind,it provided an online platform for all the ingenious minds to come together in this fight against the COVID-19 pandemic through their innovative solutions and build effective and feasible products.The event unfolded in three tiers : abstract submission,an idea pitching round infront of an esteemed panel of judges and finally a detailed presentation submission .The participants hailed from various engineering and other colleges from across the country. After rigorous scrutiny and careful consideration in each round ,the top 10 finalists were chosen from the pool of 47 registrations. To test their mettle in the finale we had the honour of having few of the finest and experienced intellectuals with concerned conscience for the nation: Shri. Bimal Krushna Mishra (President of VSSUT Alumni Association) , Dr. Bibhuti Bhusan Pati (Dean of Faculty & Planning, VSSUT Burla), Dr. Debadutta Mishra (Head of Innovation centre, VSSUT Burla), Dr. Sudhanshu Sekhar Dash (Dean of Students' Welfare, VSSUT Burla) , Er. Ashesh Padhy (Odisha head of JSW Energy), Dr-Harish Kumar Sahoo (Vice President of Technical Society, VSSUT Burla). The Finale has successfully took place in 2 slots on 16th and 17th of April, 2020. The technical presentations have been heard and the scores have been locked. All the ideas would be provided incubation support, mentorship and the teams will be provided guidance in converting them into workable prototypes for various use cases. The top three most influential and realizable ideas will be announced shortly. Stay tuned !`,
          src:`https://www.ideainnovationcell.org/assets/activity/covid1.jpg`
      }
    ];
    

    const [currentIndex, setCurrentIndex] = useState();

    function handleChange(index) {
        setCurrentIndex(index);
    }

    const renderSlides = data.map((event, index) => (
        <div key={index} className="event-slide">
            <div className="event-slide-left">
                <h3 className="event-heading">{event.heading}</h3>
                <p className="event-content event-font">
                    {event.content}
                </p>
            </div>
            <div className="event-slide-right">
                <img src={event.src} className="event-image" alt="" />
            </div>
        </div>
    ));
    
    return (
        <div>
            <h2 className="event-title">Events</h2>
            <div className="event-carousel">
              <Carousel
                  showArrows={true}
                  autoPlay={true}
                  infiniteLoop={true}
                  selectedItem={data[currentIndex]}
                  onChange={handleChange}
                  className="carousel"
              >
                  {renderSlides}
              </Carousel> 
            </div>
        </div>
    );
}

export default Event;

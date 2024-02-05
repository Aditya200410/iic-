import React from 'react';
// Import Swiper React components
import {BsFillArrowRightCircleFill ,BsFillArrowLeftCircleFill} from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import './Carousel.css';
import img1 from "./Gallery_Assets/RicePlanterd.jpg";
import img2 from "./Gallery_Assets/isrosem.jpg";
import img3 from "./Gallery_Assets/l16.jpg";
import img4 from "./Gallery_Assets/1697899982603.jpeg";
import img5 from "./Gallery_Assets/WhatsApp Image 2023-10-26 at 20.51.06_c3a96b7e.jpg";
import img6 from "./Gallery_Assets/WhatsApp Image 2023-10-26 at 20.51.07_69bb1283.jpg";
import img7 from "./Gallery_Assets/WhatsApp Image 2023-10-26 at 20.53.54_547aa015.jpg";
import img8 from "./Gallery_Assets/WhatsApp Image 2023-10-26 at 20.53.54_bc3fcc5f.jpg";
import img9 from "./Gallery_Assets/WhatsApp Image 2023-10-26 at 20.53.54_be1763bb.jpg";
import img10 from "./Gallery_Assets/evergreen_forum1.jpg";
import img11 from "./Gallery_Assets/evergreen_forum2.jpg";
import img12 from "./Gallery_Assets/governer.jpg";
import img13 from "./Gallery_Assets/IICvisit.jpg";
import img14 from "./Gallery_Assets/IIC1.jpg";
import img15 from "./Gallery_Assets/foundation.jpg";
import img16 from "./Gallery_Assets/AtIIC1.jpg";
import img17 from "./Gallery_Assets/PrizeFromHOD.jpg";
import img18 from "./Gallery_Assets/Sem2.jpg";
import img19 from "./Gallery_Assets/MinDharmendra.jpg";
import img20 from "./Gallery_Assets/MakerFest1.jpg";
import img21 from "./Gallery_Assets/Makerfest2.jpg";
import img22 from "./Gallery_Assets/Makerfest3.jpg";
import img23 from "./Gallery_Assets/Makerfest_BTS1.jpg";
import img24 from "./Gallery_Assets/Makerfest_BTS2.jpg";
import img25 from "./Gallery_Assets/Makerfest_BTS3.jpg";
import img26 from "./Gallery_Assets/IICBuilding.jpg";
import img27 from "./Gallery_Assets/IICBuilding1.jpg";
import img28 from "./Gallery_Assets/YoungTinker.jpg";
import img29 from "./Gallery_Assets/IICIANSduringVSSAUNT.jpg";
import img30 from "./Gallery_Assets/NITRtrip.jpg";
import img31 from "./Gallery_Assets/RepublicDay.jpg";
// import required modules
import { EffectCoverflow, Autoplay, Pagination, Navigation } from 'swiper/modules';
const Carousel = () => {
    return (
        <div className="container">
        <h1 className='heading'>Gallery</h1>
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
        }}
        modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
        className="swiper_container"
        >
        <SwiperSlide>
            <img src={img16} alt="slide_image" />
            <p>Our Team</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img4} alt="slide_image" />
            <p>Our VSLV Team</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img5} alt="slide_image" />
            <p>MakerFest</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img6} alt="slide_image" />
            <p>MakerFest</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img7} alt="slide_image" />
            <p>MakerFest</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img8} alt="slide_image" />
            <p>MakerFest Behind the Scenes</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img9} alt="slide_image" />
            <p>MakerFest</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img10} alt="slide_image" />
            <p>EverGreen Forum</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img11} alt="slide_image" />
            <p>EverGreen Forum</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img12} alt="slide_image" />
            <p>Rajaypal Encouraged our Team</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img13} alt="slide_image" />
            <p>Our Team being appriciated </p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img14} alt="slide_image" />
            <p>Our VSLV Team</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img15} alt="slide_image" />
            <p>Foundation Day of IIC</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img17} alt="slide_image" />
            <p>Awarded by HOD</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img18} alt="slide_image" />
            <p>Seminar on Space Program</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img19} alt="slide_image" />
            <p>Dharmendra Pradhan visits IIC</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img20} alt="slide_image" />
            <p>MakerFest</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img21} alt="slide_image" />
            <p>MakerFest</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img22} alt="slide_image" />
            <p>MakerFest</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img23} alt="slide_image" />
            <p>MakerFest Behind the Scenes</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img24} alt="slide_image" />
            <p>MakerFest Behind the Scenes</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img25} alt="slide_image" />
            <p>MakerFest Behind the Scenes</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img1} alt="slide_image" />
            <p>Rice Planter</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img2} alt="slide_image" />
            <p>Seminar with ISRO</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img3} alt="slide_image" />
            <p>Our Team became Runners Up at CREATECH</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img26} alt="slide_image" />
            <p>Our IIC Building</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img27} alt="slide_image" />
            <p>Our IIC Building</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img28} alt="slide_image" />
            <p>Young Tinker organised a workshop</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img29} alt="slide_image" />
            <p>IICian during Vassaunt 2023</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img30} alt="slide_image" />
            <p>Happy Faces after NITR trip , INNOVISION</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img31} alt="slide_image" />
            <p>IICIANS during Republic day</p>
        </SwiperSlide>
        <div className="slider-controler">
            <div className="swiper-pagination"></div>
        </div>
        </Swiper>
    </div>
    )
}

export default Carousel;
import React, { useState, useLayoutEffect, useEffect, useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay  } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Rating1 from '../../assets/Rating-1.jpg'
import Rating2 from '../../assets/Rating-2.jpg'
import Rating3 from '../../assets/Rating-3.jpg'
import Rating4 from '../../assets/Rating-4.jpg'

import { Container, ImageLogo } from './style';

import Image1 from '../../assets/LOGOS/1.png';
import Image2 from '../../assets/LOGOS/2.png';
import Image3 from '../../assets/LOGOS/3.png';
import Image4 from '../../assets/LOGOS/4.png';
import Image5 from '../../assets/LOGOS/5.png';
import Image6 from '../../assets/LOGOS/6.png';
import Image7 from '../../assets/LOGOS/7.png';
import Image8 from '../../assets/LOGOS/8.png';
import Image9 from '../../assets/LOGOS/9.png';
import Image10 from '../../assets/LOGOS/10.png';
import Image11 from '../../assets/LOGOS/11.png';
import Image12 from '../../assets/LOGOS/12.png';
import Image13 from '../../assets/LOGOS/13.png';
import Image14 from '../../assets/LOGOS/14.png';
import Image15 from '../../assets/LOGOS/15.png';
import Image16 from '../../assets/LOGOS/16.png';
import Image19 from '../../assets/LOGOS/19.png';
import Image20 from '../../assets/LOGOS/20.png';
import Image21 from '../../assets/LOGOS/21.png';
import Image24 from '../../assets/LOGOS/24.png';
import Image25 from '../../assets/LOGOS/25.png';
import Image26 from '../../assets/LOGOS/26.png';
import Image27 from '../../assets/LOGOS/27.png';
import Image28 from '../../assets/LOGOS/28.png';
import Image29 from '../../assets/LOGOS/29.png';
import Image30 from '../../assets/LOGOS/30.png';
import Image32 from '../../assets/LOGOS/32.png';
import Image33 from '../../assets/LOGOS/33.png';
import Image34 from '../../assets/LOGOS/34.png';
import Image35 from '../../assets/LOGOS/35.png';
import Image36 from '../../assets/LOGOS/36.png';
import Image37 from '../../assets/LOGOS/37.png';

const Index = () => {

    SwiperCore.use([Autoplay]);

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
          width,
          height
        };
      }
      
    function useWindowDimensions() {
        const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
      
        useLayoutEffect(() => {
          function handleResize() {
            setWindowDimensions(getWindowDimensions());
          }
      
          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
        }, []);
      
        return windowDimensions;
      }

    const { width } = useWindowDimensions();

  return (
    <div id='Rating'>

        <div style={{ padding: "50px"}} >
          <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} showArrows={true} showStatus={false} >

          <div>
            <img src={Rating1} />
          </div>

          <div>
            <img src={Rating2} />
          </div>

          <div>
            <img src={Rating3} />
          </div>

          <div>
            <img src={Rating4} />
          </div>

          </Carousel>
        </div>

        <Container>
        <Swiper
        slidesPerView={7.5}
        spaceBetween={20}
        autoplay={{delay: 0}}
        speed={3000}
        loop={true}
        >

          <SwiperSlide>
            <ImageLogo src={Image1} />
          </SwiperSlide>

          <SwiperSlide>
            <ImageLogo src={Image2} />
          </SwiperSlide>

          <SwiperSlide>
            <ImageLogo src={Image3} />
          </SwiperSlide>

          <SwiperSlide>
            <ImageLogo src={Image4} />
          </SwiperSlide>

          <SwiperSlide>
            <ImageLogo src={Image5} />
          </SwiperSlide>

          <SwiperSlide>
            <ImageLogo src={Image6} />
          </SwiperSlide>

          <SwiperSlide>
            <ImageLogo src={Image7} />
          </SwiperSlide>

          <SwiperSlide>
            <ImageLogo src={Image8} />
          </SwiperSlide>

          <SwiperSlide>
            <ImageLogo src={Image9} />
          </SwiperSlide>

          <SwiperSlide>
            <ImageLogo src={Image10} />
          </SwiperSlide>

          <SwiperSlide>
            <ImageLogo src={Image11} />
          </SwiperSlide>

          <SwiperSlide>
            <ImageLogo src={Image12} />
          </SwiperSlide>

          <SwiperSlide>
            <ImageLogo src={Image13} />
          </SwiperSlide>

          <SwiperSlide>
            <ImageLogo src={Image14} />
          </SwiperSlide>

          <SwiperSlide>
            <ImageLogo src={Image15} />
          </SwiperSlide>

          <SwiperSlide>
            <ImageLogo src={Image16} />
          </SwiperSlide>

          <SwiperSlide>
            <ImageLogo src={Image19} />
          </SwiperSlide>
          
          <SwiperSlide>
            <ImageLogo src={Image20} />
          </SwiperSlide>
          
          <SwiperSlide>
            <ImageLogo src={Image20} />
          </SwiperSlide>

          <SwiperSlide>
            <ImageLogo src={Image21} />
          </SwiperSlide>

          <SwiperSlide>
            <ImageLogo src={Image24} />
          </SwiperSlide>

          <SwiperSlide>
            <ImageLogo src={Image25} />
          </SwiperSlide>

          <SwiperSlide>
            <ImageLogo src={Image26} />
          </SwiperSlide>

          <SwiperSlide>
            <ImageLogo src={Image27} />
          </SwiperSlide>

          <SwiperSlide>
            <ImageLogo src={Image28} />
          </SwiperSlide>

          <SwiperSlide>
            <ImageLogo src={Image29} />
          </SwiperSlide>

          <SwiperSlide>
            <ImageLogo src={Image30} />
          </SwiperSlide>

          <SwiperSlide>
            <ImageLogo src={Image32} />
          </SwiperSlide>

          <SwiperSlide>
            <ImageLogo src={Image33} />
          </SwiperSlide>

          <SwiperSlide>
            <ImageLogo src={Image34} />
          </SwiperSlide>

          <SwiperSlide>
            <ImageLogo src={Image35} />
          </SwiperSlide>

          <SwiperSlide>
            <ImageLogo src={Image36} />
          </SwiperSlide>

          <SwiperSlide>
            <ImageLogo src={Image37} />
          </SwiperSlide>

        </Swiper>
        </Container>

    </div>
  )
}

export default Index;
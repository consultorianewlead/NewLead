import React, { useState, useLayoutEffect, useEffect, useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay  } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Rating1 from '../../../assets/Rating-1M.png'
import Rating2 from '../../../assets/Rating-2M.png'
import Rating4 from '../../../assets/Rating-4M.png'

import { Container, ImageLogo } from './style';

import Image1 from '../../../assets/LOGOS/1.jpg';
import Image2 from '../../../assets/LOGOS/2.jpg';
import Image3 from '../../../assets/LOGOS/3.jpg';
import Image4 from '../../../assets/LOGOS/4.jpg';
import Image5 from '../../../assets/LOGOS/5.jpg';
import Image6 from '../../../assets/LOGOS/6.jpg';
import Image7 from '../../../assets/LOGOS/7.jpg';
import Image8 from '../../../assets/LOGOS/8.jpg';
import Image9 from '../../../assets/LOGOS/9.jpg';
import Image10 from '../../../assets/LOGOS/10.jpg';
import Image11 from '../../../assets/LOGOS/11.jpg';
import Image12 from '../../../assets/LOGOS/12.jpg';
import Image13 from '../../../assets/LOGOS/13.jpg';
import Image14 from '../../../assets/LOGOS/14.jpg';
import Image15 from '../../../assets/LOGOS/15.jpg';
import Image16 from '../../../assets/LOGOS/16.jpg';
import Image19 from '../../../assets/LOGOS/19.jpg';
import Image20 from '../../../assets/LOGOS/20.jpg';
import Image21 from '../../../assets/LOGOS/21.jpg';
import Image24 from '../../../assets/LOGOS/24.jpg';
import Image25 from '../../../assets/LOGOS/25.jpg';
import Image26 from '../../../assets/LOGOS/26.jpg';
import Image27 from '../../../assets/LOGOS/27.jpg';
import Image28 from '../../../assets/LOGOS/28.jpg';
import Image29 from '../../../assets/LOGOS/29.jpg';
import Image30 from '../../../assets/LOGOS/30.jpg';
import Image32 from '../../../assets/LOGOS/32.jpg';
import Image33 from '../../../assets/LOGOS/33.jpg';
import Image34 from '../../../assets/LOGOS/34.jpg';
import Image35 from '../../../assets/LOGOS/35.jpg';
import Image36 from '../../../assets/LOGOS/36.jpg';
import Image37 from '../../../assets/LOGOS/37.jpg';

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
            <img src={Rating4} />
          </div>

          </Carousel>
        </div>

        <Container>
        <Swiper
        slidesPerView={2.5}
        spaceBetween={30}
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
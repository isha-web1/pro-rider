import React from 'react';
import  { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import  './Banner.css';
import banner from '../../assets/banner1.jpg';
import banner2 from '../../assets/banner2.jpg';
import banner3 from '../../assets/banner3.jpg';



import { Parallax, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div className='my-container h-[80vh] p-0'>
            <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
        
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide className='flex'>
          <div>
          <div className="title " data-swiper-parallax="-300">
          OVER 15 YEARS OF <br /> EXPERIENCE IN THE CUSTOM <br /> SCENE
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
          Work from scratch with bespoke frames and will <br /> simply tune up your bike to allow you optimal enjoyment. <br /> We realize that you lead a busy life, so we have made it <br /> easy for you to drop off your vehicle 24/7
          </div>
          <button className='bg-cyan-600 px-4 py-2 mt-4 rounded'>contact us</button>
          <button className='bg-yellow-400 px-4 py-2 rounded ml-4 text-black'>Learn more</button>
          </div>
          <div >
            <img className='h-[100%] w-[100%] ml-4 rounded' src={banner} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className='flex'>
          <div>
          <div className="title " data-swiper-parallax="-300">
          OVER 15 YEARS OF <br /> EXPERIENCE IN THE CUSTOM <br /> SCENE
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
          Work from scratch with bespoke frames and will <br /> simply tune up your bike to allow you optimal enjoyment. <br /> We realize that you lead a busy life, so we have made it <br /> easy for you to drop off your vehicle 24/7
          </div>
          <button className='bg-cyan-600 px-4 py-2 mt-4 rounded'>contact us</button>
          <button className='bg-yellow-400 px-4 py-2 rounded ml-4 text-black'>Learn more</button>
          </div>
          <div >
            <img className='h-[100%] w-[100%] ml-4 rounded' src={banner3} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className='flex'>
          <div>
          <div className="title " data-swiper-parallax="-300">
          OVER 15 YEARS OF <br /> EXPERIENCE IN THE CUSTOM <br /> SCENE
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
          Work from scratch with bespoke frames and will <br /> simply tune up your bike to allow you optimal enjoyment. <br /> We realize that you lead a busy life, so we have made it <br /> easy for you to drop off your vehicle 24/7
          </div>
          <button className='bg-cyan-600 px-4 py-2 mt-4 rounded'>contact us</button>
          <button className='bg-yellow-400 px-4 py-2 rounded ml-4 text-black'>Learn more</button>
          </div>
          <div >
            <img className='h-[100%] w-[100%] ml-4 rounded' src={banner2} alt="" />
          </div>
        </SwiperSlide>
        
       
      </Swiper>
        </div>
    );
};

export default Banner;
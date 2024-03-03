import Navbar from "@/components/Navbar";
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'react-responsive-carousel';gacp 

// pages/education.tsx
const Education = () => {
  return (
    <>
    <Navbar />
    <div className="bg-education-background bg-cover bg-center h-screen">
          {/* Content of your education page goes here */}
    </div>
    </>
  );
};

export default Education;


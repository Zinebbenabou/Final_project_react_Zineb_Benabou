import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import images from "../../constant/images"
import { Images } from "../../constant";
const Carousel1 = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
      <SwiperSlide className='relative '>
                <img src={Images.croussel1} alt="ccc"/>
                <div className='absolute top-[20%] flex flex-col gap-5 left-[40%] text-center text-3xl text-white'>
                <h5 className='text-xl font-[Montserrat]'>women collection 2018</h5>
                <h1  className='text-6xl font-bold font-[Montserrat]'>New Arrivals</h1>
                <button className='bg-white ms-10 py-2 w-[15vw] text-black rounded-full font-[Montserrat]'>shop now</button>
            </div>
            </SwiperSlide>
            <SwiperSlide className='relative'>
                <img src={images.croussel2} alt="ccc"/> 
                <div className='absolute top-[8rem] flex flex-col gap-5 left-[42rem] text-center text-3xl text-white'>
                <h5 className='text-xl'>women collection 2018</h5>
                <h1  className='text-6xl font-bold'>New Arrivals</h1>
                <button className='bg-white ms-10 py-2 w-[15vw] text-black rounded-full'>shop now</button>
            </div>
            </SwiperSlide>
            <SwiperSlide className='relative'>
                <img src={images.croussel3} alt="ccc"/>
                <div className='absolute top-[8rem] flex flex-col gap-5 left-[42rem] text-center text-3xl text-white'>
                <h5 className='text-xl'>women collection 2018</h5>
                <h1  className='text-6xl font-bold'>New Arrivals</h1>
                <button className='bg-white ms-10 py-2 w-[15vw] text-black rounded-full'>shop now</button>
            </div>
            </SwiperSlide>
       
      </Swiper>
    </>
  );
};

export default Carousel1;
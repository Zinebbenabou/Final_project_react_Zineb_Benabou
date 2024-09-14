import React from "react";
import images from "../../constant/images";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import data from "../../json/data.json";
import { Images } from "../../constant";

const Carousel2  = () => {
  return (
    <div className="pb-20">
    <p className="text-[35px] font-semibold text-center pt-[6rem] pb-10">
      FEATURED PRODUCTS
    </p>
    <div>
      <Swiper
        slidesPerView={4} 
        slidesPerGroup={4}
        spaceBetween={30} 
        loop={true} 
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {data.map((e, i) => (
          <SwiperSlide key={i} className="px-4">
            <div className="p-2">
              <img
                src={Images[e.images]}
                alt={e.title}
                className="w-full h-auto"
              />
            </div>
           <h1 className="pl-3 text-xl text-gray-400 pt-3 hover:text-[#f5bdb5] cursor-pointer">{e.name}</h1>
           <h1 className="pl-3 text-xl text-gray-400">{e.price}</h1>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
  );
};

export default Carousel2 ;
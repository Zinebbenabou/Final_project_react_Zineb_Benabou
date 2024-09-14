import React from "react";
import { Images } from "../../constant";
const Section3 = () => {
  return (
    <>
       <section className="mt-5">
    <div className='flex  justify-center justify-items-center gap-5'>
    <div className='flex flex-col gap-5'>
   <div className='w-[25vw] relative overflow-hidden'>
    <img src={Images.dress} alt="" className='hover:scale-110' />
   <button className='bg-white py-2 px-10 text-xl shadow-xl absolute bottom-3 left-[50%] translate-x-[-50%]  hover:bg-[#e65540] hover:text-white'>DRESSES</button></div>
  <div className='relative overflow-hidden'> 
    
<img src={Images.sunglas} alt="" className='w-[25vw] h-[40vh]  hover:scale-110 ' />
   <button className='bg-white py-2 px-10 text-xl shadow-xl absolute bottom-3 left-[50%] translate-x-[-50%]  hover:bg-[#e65540] hover:text-white'>SUNGLASSES</button>
   </div>
    </div>
    <div className='flex flex-col gap-5'>
   <div  className='relative overflow-hidden'>
    <img src={Images.watch} alt=""className='w-[25vw] h-[40vh] hover:scale-110' />
    <button className='bg-white py-2 px-8 text-xl shadow-xl absolute bottom-3 left-[50%] translate-x-[-50%]  hover:bg-[#e65540] hover:text-white '>WATCHES</button>
    </div>
   <div className='w-[25vw] relative overflow-hidden'>
    <img src={Images.footwear} alt=""  className='hover:scale-110'/>
    <button className='bg-white py-2 px-8 text-xl shadow-xl absolute bottom-3 left-[50%] translate-x-[-50%]  hover:bg-[#e65540] hover:text-white '>FOOTERWEAR</button>
    </div>
    </div>
    <div className='flex flex-col gap-5'>
   <div className='w-[25vw] relative overflow-hidden'>
    <img src={Images.bags} alt="" className='hover:scale-110' />
    <button className='bg-white py-2 px-8 text-xl shadow-xl absolute bottom-3 left-[50%] translate-x-[-50%]  hover:bg-[#e65540] hover:text-white'>BAGS</button>
    </div>
   <div className='relative overflow-hidden' >
    <img src={Images.accessoire} alt="" className='w-[25vw] h-[40vh] hover:scale-110 ' />
    <button className='bg-white py-2 px-8 text-xl shadow-xl absolute bottom-3 left-[50%] translate-x-[-50%]  hover:bg-[#e65540] hover:text-white'>ASSECOIRES</button>
    </div>
    </div>
  
  </div>
</section>
    </>
  );
};

export default Section3;

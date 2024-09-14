import React from "react";
import { Images } from "../../constant";
const Section3 = () => {
  return (
    <>
        <div className='flex justify-evenly pt-[5rem]'>
          <div className=' w-[30vw] h-[170vh] flex flex-col gap-5'>
            <div className=' w-[100%] h-[50%] relative'>
            <img className='w-[100%] h-[100%] bg-cover' src={Images.dress} alt=''/>
            <div><button className='bg-white  py-3 px-7  absolute bottom-4 left-[10vw] '>DRESS</button></div>
            </div>
            <div className='bg-[#ebebeb] w-[100%] h-[50%] relative'>
            <img className='w-[100%] h-[100%] bg-cover' src={Images.sunglas} alt=''/>
            <div><button className='bg-white  py-3 px-7  absolute bottom-4 left-[10vw] '>SUNGLASSES</button></div>

            </div>
          </div>
          <div className=' w-[30vw] h-[170vh] flex flex-col gap-5'>
            <div className=' w-[100%] h-[30%] relative'>
            <img className='w-[100%] h-[100%] bg-cover' src={Images.watch} alt=''/>
            <div><button className='bg-white  py-3 px-7  absolute bottom-4 left-[10vw] '>WATCH</button></div>

            </div>
            <div className=' w-[100%] h-[70%] relative'>
            <img className='w-[100%] h-[100%] bg-cover' src={Images.footwear} alt=''/>
            <div><button className='bg-white  py-3 px-7  absolute bottom-4 left-[10vw] '>FOOTWEAR</button></div>

            </div>
          </div>
          <div className=' w-[30vw] h-[170vh] flex flex-col gap-5'>
            <div className=' w-[100%] h-[50%] relative'>
            <img className='w-[100%] h-[100%] bg-cover' src={Images.bags} alt=''/>
            <div><button className='bg-white  py-3 px-7  absolute bottom-4 left-[10vw] '>BAGS</button></div>

            </div>
            <div className=' w-[100%] h-[50%] relative'>
            <img className='w-[100%] h-[100%] bg-cover' src={Images.accessoire} alt=''/>
            <div><button className='bg-white  py-3 px-7  absolute bottom-4 left-[10vw] '>ACCESSOIRIES</button></div>

            </div>
          </div>
          
        </div>
    </>
  );
};

export default Section3;

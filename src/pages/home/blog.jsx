import React from 'react';
import { Images } from '../../constant';
const Blogs = () => {
    return (
        <>
     <section>
        <h1 className='text-center text-4xl font-bold pt-8'>OUR BLOG</h1>
        <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
    <div className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
      <div className="">
        <img className="object-cover object-center  w-[80vw] h-[50vh] lg:h-[40vh] md:h-36 " src={Images.blog1} alt="blog" />
        <h1 className="text-xl pt-3 hover:text-[#e65540] cursor-pointer font-medium">Black Friday Guide: Best Sales & Discount Codes</h1>
        <p className='pt-3'>by fashe-theme Admin on Dec 28,2017</p>
        <p className="mx-auto text-base leading-relaxed text-gray-500 pt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</p>
        
    
      </div>
      <div className="">
        <img className="object-cover object-center  w-[80vw] h-[50vh] lg:h-[40vh] md:h-36 " src={Images.blog2} alt="blog" />
        <h1 className="text-xl pt-3 hover:text-[#e65540] cursor-pointer font-medium">Black Friday Guide: Best Sales & Discount Codes</h1>
        <p className='pt-3'>by fashe-theme Admin on Dec 28,2017</p>
        <p className="mx-auto text-base leading-relaxed text-gray-500 pt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</p>
        
    
      </div>
      <div className="">
        <img className="object-cover object-center  w-[80vw] h-[50vh] lg:h-[40vh] md:h-36 " src={Images.blog3} alt="blog" />
        <h1 className="text-xl pt-3 hover:text-[#e65540] cursor-pointer font-medium">Black Friday Guide: Best Sales & Discount Codes</h1>
        <p className='pt-3'>by fashe-theme Admin on Dec 28,2017</p>
        <p className="mx-auto text-base leading-relaxed text-gray-500 pt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</p>
        
    
      </div>
    </div>
        </div>
        <div className='flex flex-col gap-[15vh] pb-20'>
            <p className='text-[35px] font-semibold text-center'>@ FOLLOW US ON INSTAGRAM</p>
            <div className='flex justify-center items-center gap-[10vw]'>
                <div className=' '>
                    <p className='text-center text-[#555a60] text-[20px]'>Free Delivery Worldwide</p>
                    <p className='text-gray-500'>Mirum est notare quam littera gothica</p>
                </div>
                <div className='relative'>
                    <p className='text-center text-[#555a60] text-[20px]'>30 Days Return</p>
                    <p className='text-gray-500 px-6'>Simply return it within 30 days for an exchange.</p>
                    <div className='absolute top-0 bottom-0 left-[-1px] w-[1px]  bg-gray-300'></div>
                    <div className='absolute top-0 bottom-0 right-[-1px] w-[1px]  bg-gray-300'></div>
                </div>
                <div className=' '>
                    <p className='text-center text-[#555a60] text-[20px]'>Store Opening</p>
                    <p className='text-gray-500 '>Shop open from Monday to Sunday</p>
                </div>
            </div>
        </div>
</section>

        </>
    );
}

export default Blogs;

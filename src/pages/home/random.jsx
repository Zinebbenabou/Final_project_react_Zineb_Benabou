import React from 'react';
import { Images } from '../../constant';

const ThirdSection = () => {
    return (
        <div className='bg-[#f2f2f2] w-full h-[80vh] flex gap-8 items-center justify-center '>
            <div className='w-[40vw] h-[85%] relative  hover:p-2 '>
                <img src={Images.accessoire} className='w-[100%] h-[100%] ' alt=''/>
                <div className='absolute bottom-[10rem] left-[10rem] flex flex-col gap-5'>
                    <h1 className='text-3xl text-center text-white font-bold'>The Beauty</h1>
                    <h1 className='text-6xl text-white font-bold'>Look Book</h1>
                    <p className='text-2xl text-center text-white '>view collection</p>
                </div>
            </div>
            <div className='bg-white w-[50vw] h-[85%] '>
                <div className='flex items-center justify-center flex-col relative '>
                <img    src={Images.random } className=' h-[50vh] w-[35vw]' alt=''/>
                <div className='absolute bottom-[50px]'><h1>Boxy2 T-Shirt with Roll Sleeve</h1>
                <p className='text-center'>12 $</p>
                </div>
                </div>
                <div className=' flex justify-center gap-10 '>
                    <div className=' flex flex-col border border-black px-2 py-1 '><h1> -2082</h1><span>Days</span></div>
                    <div className=' flex flex-col border border-black px-2 py-1 '><h1> -21</h1><span>hrs</span></div>
                    <div className=' flex flex-col border border-black px-2 py-1 '><h1> -47</h1><span>min</span></div>
                    <div className=' flex flex-col border border-black px-2 py-1 '><h1> -42</h1><span>Secs</span></div>
                </div>
                
            </div>
        </div>
    );
};

export default ThirdSection;
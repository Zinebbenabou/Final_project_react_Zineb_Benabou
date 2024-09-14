import React from 'react';
import { FaSearch } from 'react-icons/fa'
import data from "../../json/data.json";
import items from "../../json/items.json";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Images } from '../../constant';

const BlogPage = () => {
    return (
        <>
        <div className=''> 
            <section>
                <div className='relative'>
                    <img src={Images.croussel1} alt="" className='object-cover h-[40vh] w-[100vw]'/>
                    <div className='absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 '>
                        <p className='font-bold text-[50px] text-[#fff] '>NEWS</p>
                    </div>
                </div>
            </section>

            <section className='flex gap-12 py-16 px-12'>
                <div className='w-[70%] '>
                    <div className='flex flex-col gap-8 '>
                        {
                            items.map((e) => (
                            <div className='w-[100%] overflow-hidden'>
                                <div className='overflow-hidden relative'>
                                    <img src={Images[e.pic]} alt="" className='w-[100%] transition-all duration-300 ease-in-out hover:scale-110'/>
                                    <div className='absolute top-[90%]'>
                                        <p className='bg-[#111] text-[#fff] py-2 px-4 '>28 DEC, 2017</p>
                                    </div>
                                </div>
                                <p className='text-[#333] font-semibold text-[18px] py-4 '>{e.title} </p>
                                <p className='text-[#888] pb-4 '>{e.by}</p>
                                <p className='text-[#888]'>{e.description}</p>
                                <p className='flex items-center gap-2 pt-3 text-[#555] transition duration-500 hover:text-[#e65540] cursor-pointer'>Continue Reading <FaLongArrowAltRight/></p>
                            </div>
                            ))
                        }


                    </div>


                </div>


                <div className='w-[30%] '>
                    <div className='relative'>
                        <input type="text" name="" id="" className='w-[100%] border-[1px] border-gray-200 p-4 placeholder:text-[#555] text-[13px] rounded-full ' placeholder='Search all articles...'/>
                        <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                    <p className='text-[#333] text-[22px] font-extrabold pt-10 pb-10 '>Featured Products</p>

                    <div className='felx flex-col gap-8 '>
                        {
                            data.slice(0,5).map((e) => (
                                <div className='w-[100%] flex gap-8 pb-8 '>
                                    <div className='w-[30%]'>
                                        <img src={Images[e.images]} alt="" className='w-[100%]' />
                                    </div>
                                    <div>
                                        <p className='text-[#555] pb-2 transition duration-500 hover:text-[#e65540] cursor-pointer'>{e.title}</p>
                                        <p className='text-[#555] text-[13px] pb-2'>${e.price}</p>
                                    </div>
                                </div>
                            ))
                        }

                    </div>

                    <p className='text-[#333] text-[22px] font-extrabold pt-10 pb-10 '>Tags Cloud</p>
                    <div className='flex gap-3'>
                        <button className='border-[1px] border-[#888] text-[#888] px-4 py-1 rounded-full transition duration-500 hover:text-[#e65540] hover:border-[#e65540] '>crafts</button>
                        <button className='border-[1px] border-[#888] text-[#888] px-4 py-1 rounded-full transition duration-500 hover:text-[#e65540] hover:border-[#e65540] '>street style</button>

                    </div>

                </div>
            </section>

        </div>
            
        </>
    );
};

export default BlogPage;
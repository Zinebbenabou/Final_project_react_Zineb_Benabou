import React from 'react';
import { FaSearch } from 'react-icons/fa'

import data from "../../json/data.json";
import { Images } from '../../constant';

const ShopPage = () => {
    return (
        <>
        <div className=''>
            <section>
                <div className='relative'>
                    <img src={Images.banner} alt="" className='object-cover h-[40vh] w-[100vw]'/>
                    <div className='absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 '>
                        <p className='font-bold text-[50px] text-[#fff] '>PRODUCTS</p>
                    </div>
                </div>
            </section>

            <section className='flex gap-12 py-16 px-12'>
                <div className='w-[30%]'>
                    <div className='pb-10 flex flex-col gap-3'>
                        <p className='text-[#333] text-[22px] font-extrabold pb-5 '>Categories</p>
                        <p className='text-[#333] cursor-pointer transition duration-500 hover:text-[#e65540] '>Best Seller (8 items)</p>
                        <p className='text-[#888] cursor-pointer transition duration-500 hover:text-[#e65540]'>Featured (8 items)</p>
                        <p className='text-[#888] cursor-pointer transition duration-500 hover:text-[#e65540]'>Men (8 items)</p>
                        <p className='text-[#888] cursor-pointer transition duration-500 hover:text-[#e65540]'>Women (8 items)</p>
                    </div>

                    <div className='pb-10 flex flex-col gap-3'>
                        <p className='text-[#333] text-[22px] font-extrabold pb-5 '>color</p>
                        <div className='flex gap-2'>
                            <input type="checkbox" />
                            <label className='text-[#666] cursor-pointer transition duration-500 hover:text-[#e65540] ' htmlFor="">black</label>
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" />
                            <label className='text-[#666] cursor-pointer transition duration-500 hover:text-[#e65540] ' htmlFor="">gray</label>
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" />
                            <label className='text-[#666] cursor-pointer transition duration-500 hover:text-[#e65540] ' htmlFor="">red</label>
                        </div>
                    </div>

                    <div className='pb-10 flex flex-col gap-3'>
                        <p className='text-[#333] text-[22px] font-extrabold pb-5 '>size</p>
                        <div className='flex gap-2'>
                            <input type="checkbox" />
                            <label className='text-[#666] cursor-pointer transition duration-500 hover:text-[#e65540] ' htmlFor="">L</label>
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" />
                            <label className='text-[#666] cursor-pointer transition duration-500 hover:text-[#e65540] ' htmlFor="">M</label>
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" />
                            <label className='text-[#666] cursor-pointer transition duration-500 hover:text-[#e65540] ' htmlFor="">S</label>
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" />
                            <label className='text-[#666] cursor-pointer transition duration-500 hover:text-[#e65540] ' htmlFor="">XL</label>
                        </div>
                    </div>

                    <div className='relative'>
                        <input type="text" name="" id="" className='w-[100%] border-[1px] border-gray-200 p-4 placeholder:text-[#555] text-[13px]' placeholder='Search all articles...'/>
                        <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>

                </div>

                <div className='w-[70%] '>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-3'>
                            <select
                                id="options"
                                className="mt-2 py-2 px-5 border border-gray-200"
                            >
                                <option value="" className='text-[#555] ' disabled >Select an option</option>
                                <option value="option1" className='text-[#555] '>Option 1</option>
                                <option value="option2" className='text-[#555] '>Option 2</option>
                                <option value="option3" className='text-[#555] '>Option 3</option>
                            </select>

                            <select
                                id="options"
                                className="mt-2 py-2 px-5 border border-gray-200"
                            >
                                <option value="" className='text-[#555] ' disabled >Select an option</option>
                                <option value="option1" className='text-[#555] '>10</option>
                                <option value="option2" className='text-[#555] '>20</option>
                                <option value="option3" className='text-[#555] '>30</option>
                            </select>
                        </div>

                        <div>
                            <p className='text-[#888] text-[13px]  '>Showing 1 to 6 of 8 items</p>
                        </div>
                    </div>

                    <div className='flex flex-wrap pt-10 gap-8'>
                        {
                            data.map((e) => (
                            <div className='flex flex-col w-[30%] '>
                                <div className='relative group'>
                                    <img src={Images[e.images]} alt="" className='w-[100%] transition-all duration-300 ease-in-out group-hover:brightness-75  ' />
                                    {
                                        e.sale && (
                                            <div className='absolute top-3 left-2 bg-[#e65540] text-white px-5 py-1 rounded-full  text-[13px] '>
                                                Sale
                                            </div>
                                        )
                                    }
                                    <div className='absolute top-[90%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                        <button className='bg-white py-3 px-12 w-[210px] rounded-full text-black transition duration-500  hover:bg-[#e65540] hover:text-[#fff]'>ADD TO CART</button>
                                    </div>
                                </div>
                                <div className='pt-5'>
                                    <p className='text-[#555] pb-2 transition duration-500 hover:text-[#e65540] cursor-pointer '>{e.name}</p>
                                    {
                                        e.sale ? (
                                            <div className='flex gap-3'>
                                                <p className='text-[#555] pb-2 line-through'>${e.price}</p>
                                                <p className='text-[#e65540] '>${e.reduction}</p>
                                            </div>
                                        ) : (
                                           <p className='text-[#555] pb-2'>${e.price}</p> 
                                        )
                                    }
                                    
                                </div>
                            </div>
                            ))
                        }

                    </div>

                </div>


            </section>
        </div>
            
        </>
    );
};

export default ShopPage;
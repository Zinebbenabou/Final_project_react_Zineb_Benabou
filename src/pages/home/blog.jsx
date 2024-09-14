import React from 'react';
import { Images } from '../../constant';
import items from "../../json/items.json"
const Blogs = () => {
    return (
        <>
   
    <section>
    <h2 className="text-2xl md:text-3xl font-bold m-10 text-center">
     OUR BLOG
      </h2>
  <div class="mx-8 my-10 gap-7 grid max-w-screen-xl gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
  {items.map((item) => (
  <div class="group cursor  w-[28vw] h-[70vh]  ">
    <div className='overflow-hidden' >
      <img src={Images[item.pic]} className='transform transition-transform duration-300 hover:scale-110 w-full h-[40vh] mb-3 overflow-hidden' />
    </div>
    <div class="flex-1 overflow-hidden bg-white ">
      <h1 className=' font-semibold hover:text-[#e65540] mb-3'>{item.title}</h1>
      <p class=" text-gray-600 mb-3">{item.by}</p>
      <p class=" text-gray-600">{item.description}</p>
     
      </div>
    </div>
  ))}
  
  </div>
  </section>

        </>
    );
}

export default Blogs;

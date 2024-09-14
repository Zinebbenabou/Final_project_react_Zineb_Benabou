import React from 'react';
import { Images } from '../../constant';

const Contact = () => {
    return (
        <div className='w-full'>
         <div className="relative w-full h-[30vh]">
          <img 
            className="w-full h-full object-cover"
            src={Images.croussel1}
            alt="contact"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-10">
            <h3 className="text-5xl text-white">Contact</h3>

          </div>
        </div>
        <div className='flex justify-center items-center w-full h-[80vh] p-11 gap-4'>
        <div >
        <iframe className='w-[50vw] h-[70vh]' src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d6950177.510377394!2d-7.082050000000001!3d31.792299999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sfr!2sma!4v1715947932571!5m2!1sfr!2sma"
          allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className='flex justify-center items-center flex-col w-[50vw] h-full'>
          <p>The email is invalid</p>
          <h3>Send us your message</h3>
          <input type="nom" className=" border border-slate-500  mb-2 block h-14 w-full  m-2 rounded p-2" placeholder="nom" />
          <input type="email" className=" border border-slate-400 mb-2 block h-14 w-full m-2 rounded p-2  " placeholder=" email" />
          <input type="phone" className=" border border-slate-400 mb-2 block h-14 w-full m-2 rounded p-2 " placeholder="phone" />
          <textarea className='border border-slate-500  mb-2 block h-30 w-full  m-2 rounded' placeholder="message"></textarea>
          <button class="block w-40 rounded-3xl m-2 bg-black px-14 py-4 font-medium text-white">Send</button>

        </div>
        </div>
        </div>
    );
};

export default Contact;
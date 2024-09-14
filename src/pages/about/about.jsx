import React from 'react';
import { Images } from '../../constant';

const AboutPage = () => {
    return (
        <>
        <div className=''>
            <section>
                <div className='relative'>
                    <img src={Images.banner} alt="" className='object-cover h-[40vh] w-[100vw]'/>
                    <div className='absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 '>
                        <p className='font-bold text-[50px] text-[#fff] '>ABOUT</p>
                    </div>
                </div>
            </section>

            <section className='flex items-center py-16 gap-8 px-12'>
                <div className='w-[30%] overflow-hidden'>
                    <img src={Images.aboutStory} alt="" className='w-[100%] transition-all duration-300 ease-in-out hover:scale-110' />
                </div>
                <div className='w-[70%]'>
                    <p className='text-[25px] text-[#333] pb-5 '>Our story</p>
                    <p className='text-[#888] pb-8'>Phasellus egestas nisi nisi, lobortis ultricies risus semper nec. Vestibulum pharetra ac ante ut pellentesque. Curabitur fringilla dolor quis lorem accumsan, vitae molestie urna dapibus. Pellentesque porta est ac neque bibendum viverra. Vivamus lobortis magna ut interdum laoreet. Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula. Vivamus tristique vulputate ultricies. Sed vitae ultrices orci.</p>
                    <div className='border-l-[3px] border-[#e6e6e6] pl-10 '>
                        <p className='text-[#888]'>Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while.</p>
                        <p className='text-[13px] text-[#555] pt-5'>- Steve Job’s</p>
                    </div>

                </div>
            </section>
        </div>

            
        </>
    );
};

export default AboutPage;
import React from 'react';
import { useParams } from 'react-router-dom';
import Slider from "react-slick";
import { GrFormPrevious } from 'react-icons/gr';
import { MdOutlineNavigateNext } from 'react-icons/md';
import data from "../../json/data.json";
import { Images } from '../../constant';
import { MyAppContext } from '../../context'; // Import your context or state management

const DetShop = () => {
    const { id } = useParams();
    const products = data.find(item => item.id == id);
    const sliderRef2 = React.useRef(null);

    // Get the addToCart function from context
    const { addToCart } = MyAppContext();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false, 
    };

    const handleNext = (sliderRef) => {
        sliderRef.current.slickNext();
    };

    const handlePrev = (sliderRef) => {
        sliderRef.current.slickPrev();
    };

    const handleAddToCart = () => {
        if (products) {
            addToCart({ ...products, quantity: 1 }); 
        }
    };

    return (
        <div>
            <div className='flex justify-center mb-10'>
                <div className='flex justify-center pt-[10vh] gap-[5vw] w-[70vw]'>
                    <div><img src={Images[products.images]} alt="" className='w-[30vw]' /></div>
                    <div className='flex flex-col gap-6'>
                        <p className="text-black text-3xl opacity-70 hover:text-red-600">{products.title}</p>
                        <p className="text-black text-3xl opacity-70 hover:text-red-600">{products.price}</p>
                        <p className='text-md opacity-65 w-[35vw]'>{products.name}</p>
                        <div className='flex gap-4 pt-5'>
                            <button className='border border-red-600 px-5 py-2 focus:bg-red-600 focus:text-white'>S</button>
                            <button className='border border-red-600 px-5 py-2 focus:bg-red-600 focus:text-white'>M</button>
                            <button className='border border-red-600 px-5 py-2 focus:bg-red-600 focus:text-white'>L</button>
                            <button className='border border-red-600 px-5 py-2 focus:bg-red-600 focus:text-white'>XL</button>
                            <button className='border border-red-600 px-5 py-2 focus:bg-red-600 focus:text-white'>XXL</button>
                        </div>
                        <div className='flex gap-20 items-center pt-5 pb-8'>
                            <div className='bg-[#e6e6e6] flex w-[8vw] justify-center items-center rounded-lg'>
                                <div className='px-3 py-3 text-xl font-bold'>-</div>
                                <div className='bg-white py-2 px-4'>1</div>
                                <div className='px-3 py-3 text-xl font-bold'>+</div>
                            </div>
                            <div className='bg-black text-white px-4 py-2 rounded-2xl text-xl hover:bg-red-500'>
                                <button onClick={handleAddToCart}>ADD TO CART</button>
                            </div>
                        </div>
                        <div className='flex gap-9'>
                            <p className='text-gray-600'><span className='text-black text-lg'>Brand:</span> MyVendor</p>
                            <p className='text-gray-600'><span className='text-black text-lg'> Categories:</span>boxy, Shirts, sleeveless</p>
                        </div>
                        <div className='pt-5 w-[35vw] border-t-2'>
                            <div className='pb-6 text-xl'>Description:</div>
                            <p className='text-gray-400'>{products.description}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative w-full mb-5 mt-5 justify-center flex flex-col">
                <div className='flex flex-col justify-center'>
                    <h3 className='text-[3em] text-center pb-5 font-bold'>Related Products</h3>
                </div>
                <Slider ref={sliderRef2} className="overflow-hidden" {...settings}>
                    <div className="relative flex w-[100vw] h-[80vh] items-center">
                        <div className='flex w-[100%] items-center justify-center gap-5'>
                            {data.slice(0, 4).map((item) => (
                                <div key={item.id} className="text-start flex flex-col">
                                    <div className="relative group">
                                        <img src={Images[item.images]} alt={item.name} className="w-[21vw]" />
                                        <div className="absolute inset-0 bg-black opacity-5 group-hover:opacity-50 transition-opacity duration-600"></div>
                                        <button
                                            className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-neutral-900 text-white px-3 py-2
                                             rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-600 text-lg hover:bg-red-500">
                                            ADD TO CART
                                        </button>
                                    </div>
                                    <p className="text-black pt-6 text-lg opacity-70 hover:text-red-600">{item.title}</p>
                                    <p className="text-black text-lg opacity-70">{item.price}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative w-full h-[80vh] items-center">
                        <div className='flex w-[100%] items-center justify-center gap-5'>
                            {data.slice(4, 8).map((item) => (
                                <div key={item.id} className="text-start flex flex-col">
                                    <div className="relative group">
                                        <img src={Images[item.images]} alt={item.name} className="w-[21vw]" />
                                        <div className="absolute inset-0 bg-black opacity-5 group-hover:opacity-50 transition-opacity duration-600"></div>
                                        <button
                                            className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-neutral-900 text-white px-3 py-2
                                             rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-600 text-lg hover:bg-red-500">
                                            ADD TO CART
                                        </button>
                                    </div>
                                    <p className="text-black pt-6 text-lg opacity-70">{item.name}</p>
                                    <p className="text-black text-lg opacity-70">{item.price}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Slider>
                <button onClick={() => handlePrev(sliderRef2)}
                    className="absolute left-5 top-1/2 transform -translate-y-1/2 text-black opacity-55 text-3xl">
                    <GrFormPrevious />
                </button>
                <button onClick={() => handleNext(sliderRef2)}
                    className="absolute right-5 top-1/2 transform -translate-y-1/2 text-black opacity-55 text-3xl">
                    <MdOutlineNavigateNext />
                </button>
            </div>
        </div>
    );
};

export default DetShop;

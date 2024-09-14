import React from 'react';
import Carousel1 from './caroussel';
import Section3 from './section3';
import Carousel2 from './caroussel2';
import ThirdSection from './random';
import Blogs from './blog';

const Home = () => {
    return (
        <div>
            <Carousel1/>
            <Section3/>
            <Carousel2/>
            <ThirdSection/>
            <Blogs/>
        </div>
    );
};

export default Home;
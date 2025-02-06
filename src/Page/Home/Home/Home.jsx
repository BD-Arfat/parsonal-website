import React from 'react';
import Banner from '../Banner/Banner';
import AboutMe from '../AboutMe/AboutMe';

const Home = () => {
    return (
        <div className='max-w-[1500px] mx-auto'>
            <Banner></Banner>
            <AboutMe></AboutMe>
        </div>
    );
};

export default Home;
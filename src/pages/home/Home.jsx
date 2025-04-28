import React from 'react';
import Banner from './Banner';
import Stats from './Stats';
import AboutUs from './AboutUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Stats></Stats>
        </div>
    );
};

export default Home;
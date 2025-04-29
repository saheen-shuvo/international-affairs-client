import React from 'react';
import Banner from './Banner';
import Stats from './Stats';
import AboutUs from './AboutUs';
import Programs from './Programs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Stats></Stats>
            <Programs></Programs>
        </div>
    );
};

export default Home;
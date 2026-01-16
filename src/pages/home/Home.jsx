import React from 'react';
import Banner from './Banner';
import Stats from './Stats';
import AboutUs from './AboutUs';
import Programs from './Programs';
import Partnerships from './Partnerships';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Stats></Stats>
            <Programs></Programs>
            <Partnerships></Partnerships>
        </div>
    );
};

export default Home;
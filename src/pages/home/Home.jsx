import React from 'react';
import Banner from './Banner';
import Stats from './Stats';
import AboutUs from './AboutUs';
import Programs from './Programs';
import Partnerships from './Partnerships';
import RecentUpdate from './RecentUpdate';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Stats></Stats>
            <RecentUpdate></RecentUpdate>
            <Programs></Programs>
            <Partnerships></Partnerships>
        </div>
    );
};

export default Home;
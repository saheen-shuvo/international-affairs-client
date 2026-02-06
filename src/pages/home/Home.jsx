import Banner from './Banner';
import Stats from './Stats';
import AboutUs from './AboutUs';
import Programs from './Programs';
import Partnerships from './Partnerships';
import RecentUpdate from './RecentUpdate';
import Brochure from './Brochure';
import Partners from './Partners';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Stats></Stats>
            <RecentUpdate></RecentUpdate>
            <Programs></Programs>
            <Brochure></Brochure>
            <Partners></Partners>
            <Partnerships></Partnerships>
        </div>
    );
};

export default Home;
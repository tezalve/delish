import React, { useContext } from 'react';
import './Home.css'
import Banner from './Banner/Banner';
import Chefs from './Chefs/Chefs';

const Home = () => {
    return (
        <div>
            <div className='py-5'>
                <Banner></Banner>
            </div>
            <div className='py-5'>
                <Chefs></Chefs>
            </div>
        </div>
    );
};

export default Home;
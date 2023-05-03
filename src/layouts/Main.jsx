import React from 'react';
import { Outlet } from 'react-router-dom';
import Navb from '../pages/Navb/Navb';
import Footer from '../pages/Footer/Footer';
import Header from '../pages/Home/Header/Header';

const Main = () => {
    return (
        <div>
            <div className='py-5'>
                <Header></Header>
            </div>
            <Navb></Navb>
            <Outlet></Outlet>
            <div className='pt-5'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;
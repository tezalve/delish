import React from 'react';
import { Outlet } from 'react-router-dom';
import Navb from '../pages/Navb/Navb';
import Footer from '../pages/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navb></Navb>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
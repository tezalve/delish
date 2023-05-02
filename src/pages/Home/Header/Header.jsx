import React from 'react';
import logo_1 from '../../../../public/images/logo-1.webp'

const Header = () => {
    return (
        <div className='d-flex justify-content-around align-items-center'>
            <h2>+880 1221213490</h2>
            <h1 style={{color: "red"}}>:</h1>
            <div>
                <img src={logo_1} alt="" />
                <h1 className='text-center' style={{ fontFamily: "Bento" }}>Delish</h1>
            </div>
            <h1 style={{color: "red"}}>:</h1>
            <h2>319, Ginja Street</h2>
        </div>
    );
};

export default Header;
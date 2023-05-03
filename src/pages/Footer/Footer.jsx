import React from 'react';
import './Footer.css'
import { Card } from 'react-bootstrap';
import footer from "../../../public/images/footer.jpg"
import logo_2 from "../../../public/images/logo-2.webp"
import facebook from "../../../public/icons/facebook-f.svg"
import twitter from "../../../public/icons/twitter.svg"
import instagram from "../../../public/icons/instagram.svg"
import github from "../../../public/icons/github.svg"
import { ReactSVG } from 'react-svg';


const Footer = () => {
    return (
        <div className='bg-image text-white' style={{backgroundImage: `url(${footer})`}}>
            <div className='d-flex justify-content-around align-items-center'>
                <h2>+880 1221213490</h2>
                <h1 style={{ color: "red" }}>:</h1>
                <div>
                    <img src={logo_2} alt="" />
                    <h1 className='text-center' style={{ fontFamily: "Bento" }}>Delish</h1>
                </div>
                <h1 style={{ color: "red" }}>:</h1>
                <h2>319, Ginja Street</h2>
            </div>
            <div className='d-flex justify-content-center'>
                <div className='bg-danger m-2 p-3 i-tra'>
                    <ReactSVG style={{ width: "20px", height: "20px" }} src={facebook} />
                </div>
                <div className='bg-danger m-2 p-3 i-tra'>
                    <ReactSVG style={{ width: "20px", height: "20px" }} src={twitter} />
                </div>
                <div className='bg-danger m-2 p-3 i-tra'>
                    <ReactSVG style={{ width: "20px", height: "20px" }} src={instagram} />
                </div>
                <div className='bg-danger m-2 p-3 i-tra'>
                    <ReactSVG style={{ width: "20px", height: "20px" }} src={github} />
                </div>
            </div>
            <div>
                <h4 className='text-center'>@Copyright 2023</h4>
            </div>
        </div>
    );
};

export default Footer;
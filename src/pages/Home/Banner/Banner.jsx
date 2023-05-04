import React from 'react';
import { Carousel } from 'react-bootstrap';
import slide_1 from '../../../../public/images/slider-1.jpg'
import slide_2 from '../../../../public/images/slider-2.jpg'
import slide_3 from '../../../../public/images/slider-3.jpg'

const Banner = () => {
    return (
        <div>
            {/* using carousel for banner */}
            <Carousel style={{ fontFamily: "Karasha" }}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide_2}
                        alt="First slide"
                    />
                    <Carousel.Caption style={{ top: "1.25rem" }}>
                        <h1 style={{ textTransform: "uppercase" }}>The Taste Of Japan</h1>
                        <h2>satisfy the soul, not just the palate</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide_3}
                        alt="Second slide"
                    />

                    <Carousel.Caption style={{ top: "1.25rem" }}>
                        <h1 style={{ textTransform: "uppercase" }}>Exquisite Asian Cuisine</h1>
                        <h2>explore the eastern culture and food</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide_1}
                        alt="Third slide"
                    />

                    <Carousel.Caption style={{ top: "1.25rem" }}>
                        <h1 style={{ textTransform: "uppercase" }}>Top Quality Food</h1>
                        <h2>enjoy the atmosphere of our website</h2>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;
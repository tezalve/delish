import React, { useEffect, useState } from 'react';
import Banner from './Banner/Banner';
import Chef from './Chef/Chef';
import { CardGroup, Spinner } from 'react-bootstrap';
import Reviews from './Reviews/Reviews';
import review from '../../../public/images/review.jpg'
import Story from './Story/Story';

const Home = () => {

    const [chefs, setChefs] = useState([]);

    const [loading, setloading] = useState(false);

    useEffect(() => {
        setloading(true);
        fetch('http://localhost:5000/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
        setloading(false);
    }, [])

    console.log(chefs);

    // loading state to show spinner
    if (loading) {
        return (
            <div>
                <Spinner style={{ position: "fixed", left: "50%" }} animation="border" variant="primary" />
            </div>
        );
    }

    return (
        <div>
            <div className='py-5'>
                <Banner></Banner>
            </div>
            <div className='py-5'>
                <div className='text-center' style={{ fontFamily: "Karasha" }}>
                    <h1>MEET OUR AMAZING CHEFS</h1>
                    <p>some good guys</p>
                </div>
                <CardGroup>
                    {
                        // rendering chef cards dynamically from chefs data
                        chefs.map(chef => <Chef
                            key={chef.id}
                            chef={chef}
                        ></Chef>)
                    }
                </CardGroup>
            </div>
            <div className='py-5'>
                <Story></Story>
            </div>
            <div className='py-5 bg-image' style={{ backgroundImage: `url(${review})` }}>
                <div className='text-center text-white' style={{ fontFamily: "Karasha" }}>
                    <h1>WHAT PEOPLE SAY ABOUT US</h1>
                    <p>testimonials</p>
                </div>
                <Reviews></Reviews>
            </div>
        </div>
    );
};

export default Home;
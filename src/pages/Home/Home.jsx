import React, { useContext, useEffect, useState } from 'react';
import Banner from './Banner/Banner';
import Chef from './Chef/Chef';
import { CardGroup } from 'react-bootstrap';

const Home = () => {

    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])

    console.log(chefs);

    return (
        <div>
            <div className='py-5'>
                <Banner></Banner>
            </div>
            <div>
                <div className='text-center' style={{ fontFamily: "Karasha" }}>
                    <h1>MEET OUR AMAZING CHEFS</h1>
                    <p>some good guys</p>
                </div>
                <CardGroup>
                    {
                        chefs.map(chef => <Chef
                            key={chef.id}
                            chef={chef}
                        ></Chef>)
                    }
                </CardGroup>
            </div>
        </div>
    );
};

export default Home;
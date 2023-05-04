import React from 'react';
import lost from '../../../public/images/lost.jpg'

// for non defined routes
const Notfound = () => {
    return (
        <div >
            <h1 className='text-center'>You are lost. use the navbar to get back</h1>
            <img width={"100%"} src={lost} alt="" />
        </div>
    );
};

export default Notfound;
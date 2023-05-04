import React from 'react';
import slider_1 from '../../../../public/images/slider-1.jpg'
import { Button } from 'react-bootstrap';
import story from '../../../../public/images/story.webp'

const Story = () => {
    return (
        <div>
            {/* this way of using background image is done many times in this project */}
            <div className='bg-image' style={{ backgroundImage: `url(${slider_1})` }}>
                <h1 className='text-center text-white p-5' style={{ fontFamily: "SamuraiBlast" }}>OUR STORY</h1>
            </div>
            <div className='row p-5 m-5'>
                <div className='col-lg-6 p-1'>
                    <h1 style={{ fontFamily: "SamuraiBlast" }}>WELCOME TO DELISH</h1>
                    <h3>who we are</h3>
                    <p>Delsih was created by a small team of food enthusiasts who wanted to share their love of cooking with others. They started by posting their favorite recipes on a simple blog, but soon realized that they wanted to do more. They wanted to create a space where home cooks could come to find delicious recipes, share their own creations, and connect with other foodies from around the world. So, they built Delsih - a website that's easy to use, filled with mouth-watering recipes, and a welcoming community. They started by posting their own recipes, but soon other home cooks began to share their own creations too. The website grew and grew, and soon Delsih had thousands of recipes from all over the world.</p>
                    <Button className='' variant='danger'>Learn More</Button>
                </div>
                <div className='bg-image col-lg-6 p-1'>
                    <img width={"100%"} src={story} alt="story" />
                </div>
            </div>
        </div>
    );
};

export default Story;
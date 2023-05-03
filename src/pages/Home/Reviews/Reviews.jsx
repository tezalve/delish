import React from 'react';
import { Carousel } from 'react-bootstrap';
const Reviews = () => {
    return (
        <div>
            <Carousel className='text-center text-white'>
                <Carousel.Item className='bg-dark'>
                    <p className=' p-5'>"I stumbled upon Delsih while searching for new recipes to try and I am so glad I did! This website is a goldmine of delicious recipes from all over the world. The search function is user-friendly and I love how I can filter recipes by cuisine, dietary restrictions, and more. The recipes themselves are easy to follow and always turn out amazing. The pictures are also stunning and make me want to try every recipe on the site! I also appreciate the helpful tips and tricks provided by the website's editors. Overall, I highly recommend Delsih to anyone looking to up their cooking game and explore new flavors." - Yuki Nakamura, Anytown</p>
                </Carousel.Item>

                <Carousel.Item className='bg-dark'>
                    <p className=' p-5'>"I recently discovered Delish and it has quickly become my go-to website for finding new recipes. The layout is clean and easy to navigate, and the pictures are absolutely mouth-watering! I love how they provide step-by-step instructions and even offer video tutorials to ensure success in the kitchen. The variety of recipes is impressive, with everything from quick and easy weeknight meals to gourmet showstoppers for special occasions. I appreciate that they also offer options for special dietary needs like gluten-free and vegetarian. But the best part? Every recipe I've tried so far has turned out absolutely delicious! If you're looking for a reliable source of great recipes, look no further than Delish." - Jay Harrington, Kansas</p>
                </Carousel.Item>

                <Carousel.Item className='bg-dark'>
                    <p className=' p-5'>"I've been a loyal user of Delsih for years now and I have to say, it just keeps getting better and better. The website has a vast collection of recipes from all over the world, and I love how easy it is to find something new to try. I've made everything from simple weeknight dinners to elaborate holiday feasts using recipes from this site, and they always turn out amazing. The instructions are clear and easy to follow, and the pictures are always stunning. I also love that the website includes nutritional information for each recipe, making it easy to keep track of my diet. But what really sets Delsih apart is the sense of community. I love that I can leave comments and reviews on recipes and connect with other home cooks who are also passionate about cooking. Overall, I can't recommend Delsih enough to anyone who loves to cook and wants to expand their culinary horizons." - Lisa Jia, Vegas</p>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Reviews;
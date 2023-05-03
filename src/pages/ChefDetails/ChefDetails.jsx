import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import slider_1 from '../../../public/images/slider-1.jpg'
import recipe from '../../../public/images/recipe.webp'
import facebook from "../../../public/icons/facebook-f.svg"
import twitter from "../../../public/icons/twitter.svg"
import instagram from "../../../public/icons/instagram.svg"
import github from "../../../public/icons/github.svg"
import { ReactSVG } from 'react-svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faMarker, faTurnUp } from '@fortawesome/free-solid-svg-icons';
import Recipe from './Recipe/Recipe';
import { ToastContainer } from 'react-toastify';

const ChefDetails = () => {

    const location = useLocation();
    const { chef } = location.state;

    const [recipeDetails, setRecipeDetails] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/recipes/${chef.id}`)
            .then(res => res.json())
            .then(data => setRecipeDetails(data))
    }, [])

    console.log(recipeDetails);

    console.log(chef);
    return (
        <div className='py-5'>
            {/* chefs banner */}
            <div className='bg-image ' style={{ backgroundImage: `url(${slider_1})` }}>
                <h1 className='text-center text-white p-5' style={{ fontFamily: "SamuraiBlast", textTransform: "uppercase" }}>{chef.chef_name}</h1>
                <div className='row g-0 '>
                    <div className='col-md-6 text-center'>
                        <img width={"80%"} className='bg-image' src={chef.chef_picture} alt="" />
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
                    </div>
                    <div className='col-md-6 text-white p-1'>
                        <h1 style={{ fontFamily: "SamuraiBlast", textTransform: "uppercase" }}>Bio</h1>
                        <p>{chef.bio}</p>
                        <h1 style={{ fontFamily: "SamuraiBlast", textTransform: "uppercase" }}>Likes</h1>
                        <h5><FontAwesomeIcon icon={faThumbsUp} /> {chef.likes}</h5>
                        <h1 style={{ fontFamily: "SamuraiBlast", textTransform: "uppercase" }}>No of Recipes</h1>
                        <h5><FontAwesomeIcon icon={faMarker} /> {chef.num_recipes}</h5>
                        <h1 style={{ fontFamily: "SamuraiBlast", textTransform: "uppercase" }}>Years of Experience</h1>
                        <h5><FontAwesomeIcon icon={faTurnUp} />{chef.years_of_experience}</h5>
                    </div>
                </div>
            </div>
            {/* chefs recipes */}
            <div className='py-5'>
                <div className='text-center' style={{ fontFamily: "Karasha" }}>
                    <h1 style={{textTransform: "uppercase"}}>Incredible Recipes</h1>
                    <p>mouth watering</p>
                </div>
                <div className='row bg-image g-0' style={{ backgroundImage: `url(${recipe})` }}>
                    {
                        // render recipes using map funtion
                        recipeDetails.map(recipe => <Recipe
                            key={recipe.recipe_id}
                            recipe={recipe}
                        ></Recipe>)
                    }
                </div>
            </div>
            {/* putting the toast container */}
            <ToastContainer/>
        </div>
    );
};

export default ChefDetails;
import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipe = ({ recipe }) => {

    // show toast and disable btn
    const handleClick = event =>{
        toast.success('The Recipe is in your favourites');
        event.currentTarget.disabled = true;
    }

    return (
        <div className='p-5'>
            <Card>
                <Card.Body className='bg-dark text-white row'>
                    <div className='col-md-6'>
                        <h3 style={{ fontFamily: "SamuraiBlast", textTransform: "uppercase" }}>Recipe - {recipe.recipe_name}</h3>
                        <div>
                            <h5>Ingredients</h5>
                            <ul>
                                {
                                    recipe.ingredients.map(ingredient =>
                                        <li key={recipe.ingredients.indexOf(ingredient)}>
                                            {ingredient}
                                        </li>
                                    )}
                            </ul>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <h5>Cooking Method</h5>
                        <div>
                            {recipe.cooking_method}
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faStar} /> {recipe.rating}
                        </div>
                        <div>
                            <Button onClick={handleClick} className='btn-danger text-reset text-decoration-none border rounded py-1'><FontAwesomeIcon icon={faHeart} /></Button>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Recipe;
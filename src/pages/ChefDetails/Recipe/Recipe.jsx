import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Recipe = ({ recipe }) => {
    return (
        <div className='p-5'>
            <Card>
                <Card.Body className='text-center bg-dark text-white'>
                    <Card.Title>{recipe.recipe_name}</Card.Title>
                    <Card.Text>
                        ingredients
                        {recipe.ingredients}
                    </Card.Text>
                    <Card.Text>
                        {recipe.cooking_method}
                    </Card.Text>
                    <Card.Text>
                        {recipe.rating}
                    </Card.Text>
                    <Card.Text className='btn-tra'>
                        <Button className='btn-danger text-reset text-decoration-none border rounded py-1'><FontAwesomeIcon icon={faHeart} /></Button>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Recipe;
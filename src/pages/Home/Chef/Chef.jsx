import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faMarker } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Chef.css'

const Chefs = ({ chef }) => {
    return (
        <div className='col-md-4'>
            <Col className='p-5'>
                <Card>
                    <Card.Img variant="top" src={chef.chef_picture} />
                    <Card.Body className='text-center bg-dark text-white'>
                        <Card.Title>{chef.chef_name}</Card.Title>
                        <Card.Text>
                            {chef.years_of_experience} Year of Experience
                        </Card.Text>
                        <Card.Text>
                            Recipes <FontAwesomeIcon icon={faMarker} /> {chef.num_recipes} 
                        </Card.Text>
                        <Card.Text>
                            <FontAwesomeIcon icon={faThumbsUp} /> {chef.likes}
                        </Card.Text>
                        <Card.Text className='btn-tra'>
                            <Link className='text-reset text-decoration-none border rounded p-1'>View Recipes</Link>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Chefs;
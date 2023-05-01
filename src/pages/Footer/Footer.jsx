import React from 'react';
import { Card } from 'react-bootstrap';
import footer from "../../assets/images/footer.jpg"

const Footer = () => {
    return (
        <div>
            <Card className="bg-dark text-white">
                <Card.Img src={footer} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Footer</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default Footer;
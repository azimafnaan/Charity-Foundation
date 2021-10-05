import React from 'react';
import { Button, Card } from 'react-bootstrap';
const Service = (props) => {
    const { image, title, description } = props.service;
    return (
        <div>
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button variant="danger">Donate</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;
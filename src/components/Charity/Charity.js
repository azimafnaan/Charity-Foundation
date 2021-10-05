
import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Charity = (props) => {
    const { image, title, description } = props.charity;
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

export default Charity;
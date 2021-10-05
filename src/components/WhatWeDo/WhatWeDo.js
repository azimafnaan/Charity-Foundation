import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import fundImage from '../../Image/collect.jpg'
import './WhatWeDo.css';
const WhatWeDo = () => {
    return (
        <div>
            <div>
                <img src={fundImage} alt="" />
            </div>
            <div className="do-container">
                <h1>We are Collect Donation charity foundation.</h1>
            </div>
            <div className="card-container">
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src="https://thumbor.forbes.com/thumbor/711x474/https://specials-images.forbesimg.com/dam/imageserve/1078946654/960x0.jpg?fit=scale" />
                        <Card.Body>
                            <Card.Title>Collect Money For Our Donner</Card.Title>
                            <Card.Text>
                                The legal definition of a charitable organization (and of charity) varies between countries and in some instances regions of the country
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqnZ9lZaXf25YzoONx1EOlhbdeqN3RPeLrAekHaGkU8r0qqdOmRY4-xnS1j7gT3M7AEgo&usqp=CAU" />
                        <Card.Body>
                            <Card.Title>Financial Figures </Card.Title>
                            <Card.Text>
                                The Financial sustainability of a charity, especially to charity evaluators. This information can impact a charity's reputation with donors and societies,
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://previews.123rf.com/images/jaaakworks/jaaakworks1609/jaaakworks160900059/62598708-business-concept-hand-putting-money-in-the-donation-box.jpg" />
                        <Card.Body>
                            <Card.Title>Enlightenment Charity</Card.Title>
                            <Card.Text>
                                In the Enlightenment era charitable and philanthropic activity among voluntary associations and rich benefactors became a widespread cultural practice.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>
        </div>
    );
};

export default WhatWeDo;
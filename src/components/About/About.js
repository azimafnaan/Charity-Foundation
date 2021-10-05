import React from 'react';
import aboutImg from '../../Image/about.jpeg';
import joinImg from '../../Image/join.jpg'
import { Button } from 'react-bootstrap';
import './About.css';
const About = () => {
    return (
        <div>
            <img src={aboutImg} alt="" />
            <div className="about-container">
                <div>
                    <h1>Join Us</h1>
                    <p><small>When a child gets access to good food, it can change just about everything. Sed do eiusmod tempor incididunt dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</small></p>
                    <Button variant="danger">Contact Us</Button>
                </div>
                <div>
                    <img src={joinImg} alt="" />
                </div>
            </div>

        </div>
    );
};

export default About;
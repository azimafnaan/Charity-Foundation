import React, { useEffect, useState } from 'react';
import img from '../../Image/syriaboys.jpg'
import image from '../../Image/pics (1).jpg'
import Charity from '../Charity/Charity';
import './Home.css';
const Home = () => {
    const [charitee, setCharitee] = useState([]);
    useEffect(() => {
        fetch('/home.JSON')
            .then(res => res.json())
            .then(data => setCharitee(data))
    }, [])
    return (
        <div>
            <div className="homepage">
                <img src={img} alt="" />
                <h1>How we Helps The Peoples</h1>
                <div className="charity-container">
                    {
                        charitee.map(charity => <Charity
                            charity={charity}
                            key={charity.key}
                        ></Charity>)
                    }
                </div>
            </div>
            <div className="home-content">
                <div>
                    <h2>We are tender heart charity foundation</h2>
                    <p>When a child gets access to good food, it can change just about everything. Sed do eiusmod tempor incididunt dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                </div>
                <div>
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;
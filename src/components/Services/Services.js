import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import servicesImg from '../../Image/services.jpg'
import Service from '../Service/Service';
import './Services.css';
const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/services.JSON')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="service-section">
            <img src={servicesImg} alt="" />
            <div className="service-heading">
                <h1>How we help people</h1>
            </div>
            <div className="service-container">
                {
                    services.map(service => <Service
                        service={service}
                        key={service.key}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;
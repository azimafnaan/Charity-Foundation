import React from 'react';
import './footer.css';
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-section">
                <div className="footer-left">
                    <h1>Charity Foundation</h1>
                    <p>When a child gets access to good food, it can change just about everything. Sed do eiusmod tempor incididunt dolore magna aliqua.</p>
                </div>
                <div className="footer-middle">
                    <h2>Contact Us</h2>
                    <p>4486 Richards Avenue, Modesto CA - 95354</p>
                    <p>209-818-6041</p>
                    <p>charity90@gmail.com</p>
                </div>
                <div className="footer-right">
                    <h2>Support</h2>
                    <p>When a child gets access to good food, it can change.</p>
                </div>

            </div>
            <p><small>Copyright ©Azim Afnaan</small></p>

        </div>
    );
};

export default Footer;
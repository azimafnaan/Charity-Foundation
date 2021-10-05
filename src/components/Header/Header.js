import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import  from 'react-bootstrap/Nav'

import { NavLink } from 'react-router-dom';

import './Header.css';

const Header = () => {

    return (
        <div className="navbar">
            <nav>
                <ul id="Nav_menu">
                    <li>
                        <NavLink
                            to="/home"
                            className="Nav_link"

                        >
                            Charity Foundation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/home"
                            className="Nav_link"
                            activeClassName="activeRoute">
                            HOME
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/whatwedo"
                            className="Nav_link"
                            activeClassName="activeRoute">
                            What We Do
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/services"
                            className="Nav_link"
                            activeClassName="activeRoute">
                            Services
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className="Nav_link"
                            activeClassName="activeRoute">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className="Nav_link"
                            activeClassName="activeRoute">
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>

        </div>
    );
};

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

function Navbar() {
    return (
        <nav>
            <ul className="navbarList">
                <li>
                    <Link className="dropbtn" to="/">Home</Link>
                </li>
                <li>
                    <Link className="dropbtn" to="/projects">Projects</Link>
                </li>
                <li>
                    <Link className="dropbtn" to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
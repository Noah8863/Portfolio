import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './Navbar.scss';


function NavBar() {
    return (
        <nav>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand>Noah Hoffman</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link className='navBarLinks' href="/">Home</Nav.Link>
                        <Nav.Link className='navBarLinks' href="#projects">Projects</Nav.Link>
                        <Nav.Link className='navBarLinks' href="#skills">Skills</Nav.Link>
                        <Nav.Link className='navBarLinks' href="/contact">
                            <button className="learn-more">
                                <span className="circle" aria-hidden="true">
                                    <span className="icon arrow"></span>
                                </span>
                                <span className="button-text">Lets Connect</span>
                            </button>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </nav>
    )
}

export default NavBar;
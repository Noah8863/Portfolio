import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.scss';

function NavBar() {
    return (
        <nav>
            <Navbar className="navbar" variant="dark">
                <Container>
                    <Navbar.Brand style={{ color: '#7f5af0' }}>Noah Hoffman</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link className='navBarLinks' href="/">Home</Nav.Link>
                        <Nav.Link className='navBarLinks' href="#projects">Projects</Nav.Link>
                        <Nav.Link className='navBarLinks' href="#skills">Skills</Nav.Link>
                        <Nav.Link className='navBarLinks' href="/contact">
                            <button id="button1" className="learn-more">
                                <span className="circle" aria-hidden="true">
                                    <span className="icon arrow"></span>
                                </span>
                                <span className="button-text">Lets Connect</span>
                            </button>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <div className="mobileNavBar">
                <div className="hamburger-menu">
                    <input id="menu__toggle" type="checkbox" />
                    <label className="menu__btn" htmlFor="menu__toggle">
                        <span></span>
                    </label>

                    <ul className="menu__box">
                        <li><a className="menu__item" href="#">Home</a></li>
                        <li><a className="menu__item" href="#skillSection">Learn my skills</a></li>
                        <li><a className="menu__item" href="#projectSection">View my projects</a></li>
                        <li><a className="menu__item" href="/contact">Let's talk</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
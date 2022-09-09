import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AnimatePresence, motion, useCycle } from "framer-motion";

import './Navbar.scss';

const links = [
    { name: "Home", to: "#", id: 1 },
    { name: "About", to: "#", id: 2 },
    { name: "Blog", to: "#", id: 3 },
    { name: "Contact", to: "#", id: 4 }
];

const itemVariants = {
    closed: {
        opacity: 0
    },
    open: { opacity: 1 }
};

const sideVariants = {
    closed: {
        transition: {
            staggerChildren: 0.2,
            staggerDirection: -1
        }
    },
    open: {
        transition: {
            staggerChildren: 0.2,
            staggerDirection: 1
        }
    }
};


function NavBar() {
    const [open, cycleOpen] = useCycle(false, true);

    return (
        <nav>
            <Navbar className="navbar" variant="dark">
                <Container>
                    <Navbar.Brand style={{ color: '#77ACF1' }}>Noah Hoffman</Navbar.Brand>
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
                <AnimatePresence>
                    {open && (
                        <motion.aside
                            initial={{ width: 0 }}
                            animate={{
                                width: 200
                            }}
                            exit={{
                                width: 10,
                                transition: { delay: 0.7, duration: 0.5 }
                            }}
                        >
                            <motion.div
                                className="mobileContainer"
                                initial="closed"
                                animate="open"
                                exit="closed"
                                variants={sideVariants}
                            >
                                {links.map(({ name, to, id }) => (
                                    <motion.a
                                        key={id}
                                        href={to}
                                        whileHover={{ scale: 1.1 }}
                                        variants={itemVariants}
                                    >
                                        {name}
                                    </motion.a>
                                ))}
                            </motion.div>
                        </motion.aside>
                    )}
                </AnimatePresence>
                <div className="btn-container">
                    <button id="mobileBtn"onClick={cycleOpen}>{open ? "Close" : "Open"}</button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
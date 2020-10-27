import React from 'react';
import { Link } from 'gatsby';

import { Navbar, Nav } from 'react-bootstrap';

import styles from './Header.module.scss';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link>
                        <Link to="/about">About</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/contact">Contact</Link>{' '}
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/blog">Blog</Link>{' '}
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;

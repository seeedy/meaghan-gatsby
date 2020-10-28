import React from 'react';
import { Link } from 'gatsby';

import { Navbar, Nav } from 'react-bootstrap';

import styles from './Header.module.scss';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">digital_magss</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className={styles.nav}>
                    <Nav.Item className={styles.item}>
                        <Link
                            to="/about"
                            className={styles.link}
                            activeClassName={styles.activeLink}
                        >
                            About
                        </Link>
                    </Nav.Item>
                    <Nav.Item className={styles.item}>
                        <Link
                            to="/contact"
                            className={styles.link}
                            activeClassName={styles.activeLink}
                        >
                            Contact
                        </Link>
                    </Nav.Item>
                    <Nav.Item className={styles.item}>
                        <Link
                            to="/blog"
                            className={styles.link}
                            activeClassName={styles.activeLink}
                        >
                            Blog
                        </Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;

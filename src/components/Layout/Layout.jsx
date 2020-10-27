import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import { Container } from 'react-bootstrap';

import styles from './Layout.module.scss';

const Layout = props => {
    return (
        <div>
            <div>
                <Header />
                <Container>{props.children}</Container>
            </div>

            <Footer />
        </div>
    );
};

export default Layout;

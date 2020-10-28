import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import styles from './Layout.module.scss';

const Layout = props => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Header />
                <div className={styles.page}>{props.children}</div>
            </div>

            <Footer />
        </div>
    );
};

export default Layout;

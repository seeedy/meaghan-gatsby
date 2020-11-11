import React from 'react';
import Layout from '../components/Layout/Layout';

import { useSpring, animated } from 'react-spring';

import '../styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = () => {
    const props = useSpring({ number: 1000, from: { number: 0 } });
    return (
        <Layout>
            <h1>GAY</h1>
            <div>huhu</div>
            <animated.div>{props.number}</animated.div>
        </Layout>
    );
};

export default IndexPage;

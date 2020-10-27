import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout/Layout';

const AboutPage = () => {
    return (
        <Layout>
            <h1>I'm John Rogus</h1>
            <div>I am John Rogus. I have a podcast. I like DMT and boxing.</div>
            <div>
                Need a developer? <Link to="/contact">Contact me</Link>
            </div>
        </Layout>
    );
};

export default AboutPage;

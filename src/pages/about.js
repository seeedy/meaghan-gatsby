import React from 'react';
import { Link } from 'gatsby';

const AboutPage = () => {
    return (
        <div>
            <h1>I'm John Rogus</h1>
            <div>I am John Rogus. I have a podcast. I like DMT and boxing.</div>
            <div>
                Need a developer? <Link to="/contact">Contact me</Link>
            </div>
        </div>
    );
};

export default AboutPage;

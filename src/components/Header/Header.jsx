import React from 'react';
import { Link } from 'gatsby';

const Header = () => {
    return (
        <div>
            <div>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/blog">Blog</Link>
            </div>
        </div>
    );
};

export default Header;

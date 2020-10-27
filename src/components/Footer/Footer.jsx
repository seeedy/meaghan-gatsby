import React from 'react';

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
    return <div>{`Created by John Rogus, ©${year}`}</div>;
};

export default Footer;

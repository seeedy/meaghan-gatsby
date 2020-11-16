const path = require('path');

module.exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    const blogTemplate = path.resolve('./src/templates/blog.js');
};

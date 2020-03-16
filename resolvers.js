'use strict';

const data = require('./data');

module.exports = {
    Query: {
        highlights: () => data,
        highlight: (parent, args) => data.find(item => item.id === args.id)
    }
};
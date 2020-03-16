'use strict';

const data = require('./data');

module.exports = {
    Query: {
        players: () => data,
        player: (parent, args) => data.find(item => item.number === args.number)
    }
};
'use strict';

const data = require('../../data');

module.exports = {
    getPlayers: () => data,
    getPlayer: (parent, args) => data.find(item => item.id === args.id),
    getPlayersByPosition: (parent, args) => data.filter(item => item.position === args.position)
};
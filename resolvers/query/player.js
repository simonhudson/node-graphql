'use strict';

const data = require('../../data');

module.exports = (parent, args) => data.find(item => item.number === args.number);
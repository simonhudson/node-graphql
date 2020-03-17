'use strict';

const players = require('../query').getPlayers();
const uuidv4 = require('uuid').v4;

module.exports = {
    newPlayer: (parent, args) => {
        const player = {
            id: uuidv4(),
            firstName: args.firstName,
            lastName: args.lastName,
            position: args.position,
            squadNumber: args.squadNumber
        };
        players.push(player);
        return player;
    },
    updatePlayer: (parent, args) => {
        const index = players.findIndex(player => player.squadNumber === args.squadNumber);
        const player = {
            id: players[index].id,
            firstName: args.firstName || players[index].firstName,
            lastName: args.lastName || players[index].lastName,
            position: args.position || players[index].position,
            squadNumber: args.squadNumber || players[index].squadNumber
        };
        players[index] = player;
        return player;
    },
    deletePlayer: (parent, args) => {
        const deletedPlayer = players.find(player => player.id === args.id);
        players = players.filter(player => player.id !== args.id);
        return deletedPlayer;
    }
};
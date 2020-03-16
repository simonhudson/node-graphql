'use strict';

const players = require('../query').getPlayers();

module.exports = {
    newPlayer: (parent, args) => {
        const player = {
            id: String(players.length + 1),
            firstName: args.firstName,
            lastName: args.lastName,
            position: args.position
        };
        players.push(player);
        return player;
    },
    updatePlayer: (parent, args) => {
        const index = players.findIndex(player => player.id === args.id);
        const player = {
            id: args.id,
            firstName: args.firstName,
            firstName: args.firstName,
            lastName: players[index].lastName,
            position: players[index].position
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
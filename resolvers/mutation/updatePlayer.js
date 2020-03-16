'use strict';

module.exports = (parent, args) => {
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
};
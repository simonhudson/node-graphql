'use strict';

module.exports = (parent, args) => {
    const player = {
        id: String(players.length + 1),
        firstName: args.firstName,
        lastName: args.lastName,
        position: args.position
    };
    players.push(player);
    return player;
}
'use strict';

module.exports = (parent, args) => {
    const deletedPlayer = players.find(player => player.id === args.id);
    players = players.filter(player => player.id !== args.id);
    return deletedPlayer;
};
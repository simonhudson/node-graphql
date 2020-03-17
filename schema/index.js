'use strict';

const { gql } = require('apollo-server');

// Use ! to make field required
const typeDefs = gql`
    type Player {
        id: ID!
        squadNumber: Int!
        firstName: String
        lastName: String
        position: String
        nationality: String
    }
    type Query {
        getPlayers: [Player]!
        getPlayer(squadNumber: Int!): Player
        getPlayersByPosition(position: String!): [Player]!
    }
    type Mutation {
        newPlayer (firstName: String! lastName: String! position: String! squadNumber: Int!): Player!
        updatePlayer(firstName: String lastName: String position: String squadNumber: Int): Player!
        deletePlayer(id: ID!): Player!
    }
`;

module.exports = typeDefs;
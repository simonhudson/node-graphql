'use strict';

const { gql } = require('apollo-server');

// Use ! to make field required
const typeDefs = gql`
    type Player {
        id: ID!
        number: Int!
        firstName: String
        lastName: String
        position: String
        nationality: String
    }
    type Query {
        players: [Player]!
        player(number: Int!): Player
    }
    type Mutation {
        newPlayer (firstName: String! lastName: String! position: String!): Player!
        updatePlayer(id: ID! firstName: String!): Player!
        deletePlayer(id: ID!): Player!
    }
`;

module.exports = typeDefs;
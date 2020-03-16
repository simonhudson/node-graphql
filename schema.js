'use strict';

const { gql } = require('apollo-server');

// Use ! to make field required
const typeDefs = gql`
    type Highlight {
        id: ID!
        content: String!
        title: String
        author: String
    }
    type Query {
        highlights: [Highlight]!
        highlight(id: ID!): Highlight
    }
`;

module.exports = typeDefs;
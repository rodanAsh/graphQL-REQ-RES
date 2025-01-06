const {gql} = require('apollo-server')


const typeDefs = gql`

    type User {
        id: ID!
        name: String!
        username: String!
        age: Int!
        nationality: Nationality!
        friends: [User]
        favoriteMovies: [Movie]
    }

    type Movie {
        id: ID!
        name: String!
        yearOfRelease: Int!
        isInTheater: Boolean!
    }

    type Query {
        users: [User!]!
        user(id: ID!): User!
        movies: [Movie!]!
        movie(name: String!): Movie!
    }

    enum Nationality {
        MEXICAN
        FRENCH
        JAPANESE
        AMAZONIAN
        AFRICAN
    }

    input CreateUserInput {
        name: String!
        username: String!
        age: Int!
        nationality: Nationality = JAPANESE
    }

    input CreateUsernameInput {
        id: ID!
        newUsername: String!
    }

    type Mutation {
        createUser(input: CreateUserInput!): User!
        updateUsername(input: CreateUsernameInput!): User!
        deleteUser(id: ID!): User
    }
`;

module.exports = {typeDefs}
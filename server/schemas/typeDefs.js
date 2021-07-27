// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`

  type Thought {
    _id: ID
    thoughtText: String
    createdAt: String
    username: String
    reactionCount: Int
    reactions: [Reaction]
  }

  type Reaction {
    _id: ID
    reactionBody: String
    createdAt: String
    username: String
  }

  type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    thoughts: [Thought]
    friends: [User]
  }

  type Query {
    users: [User]
    user(username: String!): User
    thoughts(username: String): [Thought]
    thought(_id: ID!): Thought
  }
`;

// export the typeDefs
module.exports = typeDefs;

// Query samples
// query {
//   # get all users
//   users {
//     username
//     email
//   }

//   # get a single user by username (use a username from your database)
//   user(username: "Cordell51") {
//     username
//     email
//     friendCount
//     thoughts {
//       thoughtText
//     }
//     friends {
//       username
//     }
//   }

//   # query all thoughts
//   thoughts {
//     _id
//     username
//     thoughtText
//     reactions {
//       _id
//       createdAt
//       username
//       reactionBody
//     }
//   }

//   # query a single thought (use an _id from a thought in your database)
//   thought(_id: "60ff3ef98077b52cb8e0d59f") {
//     _id
//     username
//     thoughtText
//     createdAt
//     reactions {
//       username
//       reactionBody
//     }
//   }
// }
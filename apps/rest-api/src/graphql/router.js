const { ApolloServer, gql } = require('apollo-server-express');
const { ApolloServerPluginDrainHttpServer } = require('apollo-server-core');
const { port } = require('../../config/env.dev')
const jwtCheck = require("../../utils/check-auth");

const typeDefs = gql`
  type Query {
    hello: String
  }
`

const resolvers = {
  Query: {
    hello: (info, args, context) => 'Hello protected world!'
  }
}

const setupGraphqlServer = async (httpServer, app) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    context: ({ req }) => {
      const user = req.user;
      return { user };
    }
  });

  await server.start();

  app.use(jwtCheck)
  server.applyMiddleware({ app });

  console.log(`🚀 Graphql Server ready at http://localhost:${port}${server.graphqlPath}`)
}

module.exports = setupGraphqlServer

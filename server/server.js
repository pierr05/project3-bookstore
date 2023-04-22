const express = require('express');
const db = require('./config/connection'); 
const { ApolloServer } = require('apollo-server-express');
// NOTE: PATH NEED TO BE FIXED
const { typeDefs, resolvers } = require('');

const PORT = process.env.PORT || 3001;
const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const startApolloServer = async(typeDefs, resolvers) => {
    await server.start();
    server.applyMiddleware({ app });

    db.once('open', () => {
        app.listen(PORT, () => {
          console.log(`API server running on port ${PORT}!`);
          console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
        })
      })
};

startApolloServer(typeDefs, resolvers); 

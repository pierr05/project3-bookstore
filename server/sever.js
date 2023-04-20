// const express = require('express');
// const db = require('./config/connection'); 
// const { ApolloServer } = require('apollo-server-express');
// const { typeDefs, resolvers } = require('./schemas');

// const PORT = process.env.PORT || 3001;
// const app = express();

// const server = new ApolloServer({
//     typeDefs,
//     resolvers,
//   });

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// const startApolloServer = async(typeDefs, resolvers) => {
//     await server.start();
//     server.applyMiddleware({ app });

//     db.once('open', () => {
//         app.listen(PORT, () => {
//           console.log(`API server running on port ${PORT}!`);
//           console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
//         })
//       })
// };

// startApolloServer(typeDefs, resolvers); 

const request = require('request');

function execute() {
  const options = {
    "url": "https://api.nytimes.com/svc/books/v3/reviews.json?api-key=[AwrmvpUcpmZ1C053rsBO4YiulaWUfxYn]",
    "method": "GET",
    "headers": {
      "Accept": "application/json"
    }
  };
  request(options, function (err, res, body) {
    if (err) {
      console.error(err);
    }
    else {
      console.log(body);
    }
  });
}

execute();

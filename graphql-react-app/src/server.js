const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const cors = require("cors");
const typeDefs = require("./schema/typeDefs");
const resolvers = require("./schema/resolvers");
require("dotenv").config();

const app = express();
app.use(cors());

const server = new ApolloServer({ typeDefs, resolvers });

async function startServer() {
  await server.start();
  server.applyMiddleware({ app });
}

startServer();

app.listen(4000, () => console.log("🚀 Server running on http://localhost:4000/graphql"));

const path = require("path");
// const userRoutes = require('./controlers/api/user-routes.js');
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

const { ApolloServer } = require("apollo-server-express");

const { authMiddleware } = require("./utils/auth");

const { typeDefs, resolvers } = require("./schemas");

const DB = require("./config/connection");

const server = new ApolloServer({
    typeDefs, resolvers, context: authMiddleware
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

const startApolloServer = async (typeDefs, resolvers) => {
    await server.start()
    server.applyMiddleware({ app })
    DB.once("open", () => {
        app.listen(PORT, () => {
            console.log("api server running on port 3001")
        })
    })
};
startApolloServer(typeDefs, resolvers);



















const path = require("path");
const userRoutes = require('./controlers/api/user-routes.js');
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

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../client"))
});

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

app.use("/api", userRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html/'))
})
app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, '/dashboard.html/'))
})
app.get('/entry', (req, res) => {
    res.sendFile(path.join(__dirname, './public/entry.html/'))
})
app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/signup.html/'))
})
app.get('/support', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/support.html/'))
})
app.get('/terms-conditions', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/terms-conditions.html/'))
})
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/register.html/'))
})
app.get('/viewAllEntries', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/viewAllEntries.html/'))
})
app.get('/privacy-policy', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/privacy-policy.html/'))
})
app.get('/loggedOut', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/loggedOut.html/'))
})
app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/signup.html/'))
})
app.get('/forgot-password', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/forgot-password.html/'))
})


// app.get('/viewAllEntries', (req, res) => {
//     res.sendFile(path.join(__dirname, '/viewAllEntries.html/'))
// })
// app.use('/api',indexRouter);
//
//
// app.use((err,req,res,next)=>{
//     err.statusCode=err.statusCode || 500;
//     err.message=err.message || "Internal Server Error";
//     res.status(err.statusCode).json({
//         message: err.message,
//     });
//
//
//
app.listen(PORT, () => {
    console.log('App listening on port ' + PORT);
    sequelize.sync({ force: false });

});















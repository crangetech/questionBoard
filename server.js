const path = require("path");
//const userRoutes=require('./controlers/api/user-routes.js');
const express = require("express");
const session = require("express-session");
const app = express();
const PORT = process.env.PORT || 3001;
//const sequelize = require("./config/connection");


// const SequelizeStore = require('connect-session-sequelize')(session.Store);
// const sess = {
//   secret: "Super secret secret",
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize
//   })
// };
app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/api",userRoutes);
//this will be slide 2
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html/'))
})
//this will be slide 4
app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, './public/dashboard.html/'))
})
//This will be the page for slide 5
app.get('/ask', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/ask.html/'))
})
//not a slide yet
app.get('/support', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/support.html/'))
})
//this will be slide 6
app.get('/terms-conditions', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/terms-conditions.html/'))
})
//this will be slide 3
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/register.html/'))
})

//this will be slide 7
app.get('/privacy-policy', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/privacy-policy.html/'))
})
// not a slide yet
app.get('/loggedOut', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/loggedOut.html/'))
})

//not a slide yet
app.get('/forgot-password', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/forgot-password.html/'))
})



app.listen(PORT,()=>{
console.log('App listening on port '+PORT);
sequelize.sync({force:false});

});















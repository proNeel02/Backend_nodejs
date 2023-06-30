require('dotenv').config();
const express = require("express");

const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const PORT = 3000;
const app = express();

// CORS ( === Allowing Request From Any Client === )
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization, Content-Type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});


// adding middle ware to read incomming request from client
// adding middleware function between client and server using ```use()``` function 
// this middle ware will parse body into json object so we can handle clent request more effectively
app.use(bodyParser.json());
app.use('/user', userRoutes);


app.use('*', (req,res) => {
res.status(404).send("Source Not Found!");
});
// listing to port
app.listen(PORT,() => {
    console.log(`Server is Running at ${PORT}`);
});
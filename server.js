const express = require("express");
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const PORT = 3000;
const app = express();
// adding middle ware to read incomming request from client
// adding middleware function between client and server using ```use()``` function 
// this middle ware will parse body into json object so we can handle clent request more effectively
app.use(bodyParser.json());
app.use('/users', userRoutes);


// listing to port
app.listen(PORT,() => {
    console.log(`Server is Running at ${PORT}`);
});
let express = require('express');
let app = express();





const bodyParser = require('body-parser');

// Define a route handler for the root URL
app.get('/', (req, res) => {
    console.log("hello world"); // Log "hello world"
    res.send("hello world"); // Send "hello world" as the response
});

































 module.exports = app;

const express = require("express");
const bodyParser = require("body-parser");
const contacts = require('./routes/contacts.js')
const vehicles = require('./routes/vehicles.js')
const comments = require('./routes/comments.js')
const products = require('./routes/products.js')
const app = express();

const port = process.env.PORT || 4000;


app.use(express.static('public'))
app.use(bodyParser.json())

app.use(contacts, vehicles, comments, products)

app.listen(port, () => {
    console.log(`Web server is listening on port ${port}!`);
});

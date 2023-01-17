'use strict'
require('dotenv').config();
let express = require('express');

const app = express();
app.use(express.json());

app.get('/hello', (req, res) => {
    const query = req.query;
    if (query.hasOwnProperty('name')) {
        res.status(200).send(`Hello ${query.name}`);
    }
    res.status(200).send('Hello Stranger');
});

app.get('/author', (req, res) => {
    res.status(200).json("Iman Mosayebi");
});

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`server is listening port ${port}`);
});

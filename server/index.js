'use strict'
require('dotenv').config();
let express = require('express');

const app = express();
app.use(express.json());

app.get('/hello', (req, res) => {
    const query = req.query;
    const response = {
        data: 'Hello Stranger',
        time: new Date().getTime(),
        status: 200,
        request: 'get'
    };
    if (query.hasOwnProperty('name')) {
        response.data = `Hello ${query.name}`
        res.status(200).json(response);
    }
    res.status(200).json(response);
});

app.get('/auther', (req, res) => {
    const response = {
        data: "Iman Mosayebi",
        time: new Date().getTime(),
        status: 200,
        request: 'get'
    };
    res.status(200).json(response);
});

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`server is listening port ${port}`);
});

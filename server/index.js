'use strict'
require('dotenv').config();
let express = require('express');

const app = express();
app.use(express.json());

const log4js = require("log4js");
log4js.configure({
    appenders: { dockerServerLog: { type: "file", filename: "logs/docker-server.log" } },
    categories: { default: { appenders: ["dockerServerLog"], level: "info" } },
});
const logger = log4js.getLogger("dockerServerLog");

app.get('/hello', (req, res) => {
    logger.info("request to /hello", {
        date: new Date().getTime(),
        status: 200,
        request: `GET, ${req.url}`
    });
    const query = req.query;
    if (query.hasOwnProperty('name')) {
        res.status(200).send(`Hello ${query.name}`);
    } else {
        res.status(200).send('Hello Stranger');
    }
});

app.get('/author', (req, res) => {
    logger.info("request to /author", {
        date: new Date().getTime(),
        status: 200,
        request: `GET, ${req.url}`
    });
    res.status(200).json("Iman Mosayebi");
});

const port = process.env.PORT ?? 8080;
app.listen(port, () => {
    console.log(`server is listening port ${port}`);
    logger.info(`server is listening port ${port}`, {
        date: new Date().getTime()
    });
});

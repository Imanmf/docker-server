let express = require('express');

var app = express();
app.use(express.json());

app.get('/hello', (req, res) => {
    res.send('Hello Stranger');
});

app.get('/auther', (req, res) => {
    res.send('Iman Mosayebi');
});

app.listen(3000, () => {
    console.log('server is listening port 3000');
});

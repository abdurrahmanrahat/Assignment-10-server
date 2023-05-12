const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefsData = require('./data/chefs.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Chef is running!!');
})

// all chef data send to client side.
app.get('/chefs', (req, res) => {
    res.send(chefsData);
})

app.listen(port, () => {
    console.log(`Chef API is running on Port: ${port}`);
})
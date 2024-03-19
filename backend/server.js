const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Invoke cors middleware
app.use(express.json());

app.get('/', function (req, res) {  
    res.send('Hello');  
});

app.listen(3000, (err) => {
    if (err) throw err;
    console.log("Running on Port 3000");
});

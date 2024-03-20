var express = require("express");
var app = express();
var port = process.env.port || 3000;

app.get('/add', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (!isNaN(num1) && !isNaN(num2)) {
        const sum = num1 + num2;
        res.send(`The sum of ${num1} and ${num2} is ${sum}`);
    } else {
        res.status(400).send('Please provide valid numbers');
    }
});

app.listen(port, () => {
    console.log("App listening on port: " + port);
});

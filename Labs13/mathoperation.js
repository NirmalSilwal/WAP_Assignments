const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    // console.log(__dirname);
    res.sendFile(__dirname + "/index.html")
});

app.post("/", (req, res) => {
    // console.log(req.body);
    const selectedValue = req.body.mathOperation;

    const firstNum = Number(req.body.num1);
    const secondNum = Number(req.body.num2);

    let returnValue = "";
    // console.log(firstNum);
    // console.log(secondNum);
    // console.log("val -> " + selectedValue);

    switch (selectedValue) {
        case 'add':
            returnValue = firstNum + secondNum;
            break;
        case 'subtract':
            returnValue = firstNum - secondNum;
            break;
        case 'multiply':
            returnValue = firstNum * secondNum;
            break;
        case 'divide':
            returnValue = firstNum / secondNum;
            break;
    }
    res.send(`
    <div>
    <p>The final result is: ${returnValue} </p> <br>
    <a href ="/">Another Calculation </a>
    </div> `
    );
});

app.listen(8000, () => { console.log("listening on port 8080") });
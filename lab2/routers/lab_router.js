import express from "express";

const router = express.Router();

router.get("/name", (req, res) => {
    res.send("Myon Walcott");
});


router.get('/add/:left/:right', (req, res) => {
    console.log(req.params.left);
    let left = parseFloat(req.params.left);
    let right = parseFloat(req.params.right);
    res.send(`The sum of ${left} and ${right} is ${left + right}`);
});


router.get('/calculate/:x/:y/:operator', (req, res) => {
    let x = parseFloat(req.params.x);
    let y = parseFloat(req.params.y);
    let operator = req.params.operator;
    let result;

    switch (operator) {
        case 'add':
            result = x + y;
            break;
        case 'subtract':
            result = x - y;
            break;
        case 'multiply':
            result = x * y;
            break;
        case 'divide':
            result = x / y;
        case "/":
            if (y !== 0) {
                return res.send(`${x / y}`);
            } else {
                return res.send("Cannot divide by zero");
            }
            break;
        default:
            res.status(400).send('Invalid operator');
            return;
    }
    res.send(`The result of ${operator} ${x} and ${y} is ${result}`);
});


router.get("/", (req, res) => {});
router.get("/", (req, res) => {});




export default router; 
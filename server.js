const express = require('express');
const app = express();
const PORT = 8080;

function calculateTax(income) {
    if (income <= 0) return 0;
    return income * 0.20; // Flat 20% tax rate
}

app.get('/', (req, res) => {
    const income = req.query.income || 10000;
    const tax = calculateTax(income);
    res.send(`
        <h1>Tax Calculator App</h1>
        <p>Input Income: $${income}</p>
        <p>Calculated Tax (20%): $${tax}</p>
    `);
});

app.listen(PORT, () => {
    console.log(`Tax Calculator running on port ${PORT}`);
});

module.exports = { calculateTax };
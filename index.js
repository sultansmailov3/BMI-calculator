const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000; 

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.post('/calculate-bmi', (req, res) => {
    const weight = parseFloat(req.body.weight);
    const height = parseFloat(req.body.height);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        return res.send('<h1>Invalid input. Please enter positive numbers.</h1>');
    }


    const bmi = weight / (height * height);
    let category = '';
    let color = '';

    if (bmi < 18.5) {
        category = 'Underweight';
        color = 'blue';
    } else if (bmi < 24.9) {
        category = 'Normal weight';
        color = 'green'; 
    } else if (bmi < 29.9) {
        category = 'Overweight';
        color = 'orange'; 
    } else {
        category = 'Obese';
        color = 'red'; 
    }


    res.send(`
        <div style="text-align: center; font-family: Arial, sans-serif; margin-top: 50px;">
            <h2>Your BMI Result</h2>
            <p style="font-size: 24px;">BMI: <strong>${bmi.toFixed(2)}</strong></p>
            <p style="font-size: 24px; color: ${color};">Category: <strong>${category}</strong></p>
            <hr>
            <a href="/">Calculate Again</a>
        </div>
    `);
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

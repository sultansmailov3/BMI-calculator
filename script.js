<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BMI Calculator</title>
    <style>
        body { font-family: 'Segoe UI', sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #f4f4f9; margin: 0; }
        .container { background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); width: 100%; max-width: 400px; text-align: center; }
        h1 { color: #333; }
        .form-group { margin-bottom: 1rem; text-align: left; }
        label { display: block; margin-bottom: .5rem; color: #666; }
        input { width: 100%; padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; }
        #circle { width: 100px; height: 100px; border: 5px solid #ccc; border-radius: 50%; margin: 20px auto; transition: border-color 0.3s; }
        #bmiVal { font-size: 24px; margin-top: 10px; }
        #resultText { margin-top: 10px; font-weight: bold; }
        .error { color: red; }
    </style>
</head>
<body>
<div class="container">
    <h1>BMI Calculator</h1>
    <div class="form-group">
        <label for="weight">Weight (kg):</label>
        <input type="number" step="0.1" id="weight" min="0.1">
    </div>
    <div class="form-group">
        <label for="height">Height (m):</label>
        <input type="number" step="0.01" id="height" min="0.1">
    </div>

    <div id="circle"></div>
    <div id="bmiVal"></div>
    <div id="resultText"></div>
</div>

<script>
    function calculateBMI() {
        const weight = parseFloat(document.getElementById("weight").value);
        const height = parseFloat(document.getElementById("height").value);

        if (!weight || !height) {
            document.getElementById("bmiVal").innerText = '';
            document.getElementById("resultText").innerText = '';
            document.getElementById("circle").style.borderColor = '#ccc';
            return;
        }

        const bmi = (weight / (height * height)).toFixed(1);
        let category = '';
        let color = '';

        if (bmi < 18.5) {
            category = 'Underweight';
            color = '#3498db';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = 'Normal weight';
            color = '#2ecc71';
        } else if (bmi >= 25 && bmi < 29.9) {
            category = 'Overweight';
            color = '#f1c40f';
        } else {
            category = 'Obesity';
            color = '#e74c3c';
        }

        document.getElementById("bmiVal").innerText = bmi;
        document.getElementById("circle").style.borderColor = color;
        document.getElementById("resultText").innerText = category;
    }

    // Listen to changes on both inputs
    document.getElementById("weight").addEventListener("input", calculateBMI);
    document.getElementById("height").addEventListener("input", calculateBMI);
</script>
</body>
</html>

document.getElementById("form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;

    const res = await fetch("/calculate-bmi", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ weight, height })
    });

    const data = await res.json();

    if (data.error) {
        document.getElementById("resultText").innerHTML =
            `<span class="error">${data.error}</span>`;
        return;
    }

    document.getElementById("bmiVal").innerText = data.bmi;
    document.getElementById("circle").style.borderColor = data.color;
    document.getElementById("resultText").innerHTML =
        `<strong>${data.category}</strong>`;
});


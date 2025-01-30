function resultBMI(weight, height) {
    if (weight <= 0 || height <= 0) {
        return "Masukkan berat dan tinggi yang valid";
    }
    
    let heightInMeters = height / 100;
    let bmi = weight / (heightInMeters * heightInMeters);
    
    return bmi.toFixed(2);
}

function calculateBmi() {
    let weight = parseFloat(document.getElementById('input-berat-badan').value);
    let height = parseFloat(document.getElementById('input-tinggi-badan').value);
    let resultBmi = document.getElementById('result-bmi');

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        resultBmi.innerText = "Masukkan berat dan tinggi yang valid";
        return;
    }

    let bmi = resultBMI(weight, height);
    resultBmi.innerText = `BMI Anda: ${bmi}`;
}

// Tambahkan event listener ke tombol
document.querySelector(".btn.btn-primary").addEventListener("click", calculateBmi);
document.querySelector(".btn.btn-secondary").addEventListener("click", function() {
    document.getElementById('input-berat').value = "";
    document.getElementById('input-tinggi-badan').value = "";
    document.getElementById('result-bmi').innerText = "0";
});

function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');

    if (weight > 0 && height > 0) {
        const resultBMI = weight / (height * height);
        let resultBD = "";

        if (resultBMI < 18.5) {
            resultBD = "น้ำหนักน้อยกว่าเกณฑ์";
        } else if (resultBMI >= 18.5 && resultBMI < 24.9) {
            resultBD = "น้ำหนักปกติ";
        } else if (resultBMI >= 25 && resultBMI < 29.9) {
            resultBD = "น้ำหนักเกิน";
        } else {
            resultBD = "อ้วน";
        }

        document.getElementById('result').innerHTML = `
             <h2 class="resulthead">ผลลัพท์ของคุณ</h2>
            <p>น้ำหนักของคุณ: <strong>${weight} Kg</strong></p>
            <p>ส่วนสูงของคุณคือ: <strong>${height} M</strong></p>
            <p>ค่า BMI ของคุณคือ: <strong>${resultBMI.toFixed(2)}</strong></p>
            <p>หมวดหมู่: <strong>${resultBD}</strong></p>`;
        document.getElementById('result').classList.add('display');
        weightInput.value = "";
        heightInput.value = "";
    } else {
        document.getElementById('result').innerHTML = `
            <p>กรุณากรอกข้อมูลให้ครบถ้วนและถูกต้อง</p>`;
    }

}

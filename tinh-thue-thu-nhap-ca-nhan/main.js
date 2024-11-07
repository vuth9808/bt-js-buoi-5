// Sơ đồ 3 khối:
// 1. Input: Nhập tổng thu nhập và số người phụ thuộc.
// 2. Xử lý: Tính thu nhập chịu thuế, áp dụng các mức thuế suất để tính số thuế phải đóng.
// 3. Output: Hiển thị số thuế phải đóng.

function calculateTax() {
    const totalIncome = parseFloat(document.getElementById("totalIncome").value);
    const dependents = parseInt(document.getElementById("dependents").value);

    if (isNaN(totalIncome) || isNaN(dependents) || totalIncome < 0 || dependents < 0) {
        document.getElementById("result").innerText = "Vui lòng nhập dữ liệu hợp lệ.";
        return;
    }

    // Tính thu nhập chịu thuế
    const taxableIncome = totalIncome - 4 - dependents * 1.6;

    // Khởi tạo biến thuế
    let tax = 0;

    // Tính thuế dựa trên các mức thu nhập
    if (taxableIncome <= 60) {
        tax = taxableIncome * 0.05;
    } else if (taxableIncome <= 120) {
        tax = 60 * 0.05 + (taxableIncome - 60) * 0.10;
    } else if (taxableIncome <= 210) {
        tax = 60 * 0.05 + 60 * 0.10 + (taxableIncome - 120) * 0.15;
    } else if (taxableIncome <= 384) {
        tax = 60 * 0.05 + 60 * 0.10 + 90 * 0.15 + (taxableIncome - 210) * 0.20;
    } else if (taxableIncome <= 624) {
        tax = 60 * 0.05 + 60 * 0.10 + 90 * 0.15 + 174 * 0.20 + (taxableIncome - 384) * 0.25;
    } else if (taxableIncome <= 960) {
        tax = 60 * 0.05 + 60 * 0.10 + 90 * 0.15 + 174 * 0.20 + 240 * 0.25 + (taxableIncome - 624) * 0.30;
    } else {
        tax = 60 * 0.05 + 60 * 0.10 + 90 * 0.15 + 174 * 0.20 + 240 * 0.25 + 336 * 0.30 + (taxableIncome - 960) * 0.35;
    }

    // Hiển thị kết quả
    document.getElementById("result").innerText = `Thuế cho ${document.getElementById("name").value}: ${tax.toFixed(2)} triệu VNĐ`;
}

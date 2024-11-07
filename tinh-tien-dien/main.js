/*
Sơ đồ 3 khối:

1. Input (Dữ liệu đầu vào):
   - Tên khách hàng (name)
   - Số kWh tiêu thụ (usage)

2. Process (Xử lý):
   - Tính tiền điện dựa trên mức tiêu thụ theo các quy tắc:
       - 50 kWh đầu: 500đ/kWh
       - 50 kWh tiếp theo: 650đ/kWh
       - 100 kWh tiếp theo: 850đ/kWh
       - 150 kWh tiếp theo: 1100đ/kWh
       - Còn lại: 1300đ/kWh
   - Tính tổng tiền điện dựa trên từng bậc tiêu thụ.

3. Output (Kết quả đầu ra):
   - Hiển thị tên khách hàng và tổng tiền điện phải trả.
*/

function calculateElectricityBill() {
    // Input
    const name = document.getElementById("name").value;
    const usage = parseFloat(document.getElementById("usage").value);
  
    if (usage < 0) {
      document.getElementById("result").textContent = "Số kWh phải là số dương!";
      return;
    }
  
    // Process
    let totalCost = 0;
  
    if (usage <= 50) {
      totalCost = usage * 500;
    } else if (usage <= 100) {
      totalCost = 50 * 500 + (usage - 50) * 650;
    } else if (usage <= 200) {
      totalCost = 50 * 500 + 50 * 650 + (usage - 100) * 850;
    } else if (usage <= 350) {
      totalCost = 50 * 500 + 50 * 650 + 100 * 850 + (usage - 200) * 1100;
    } else {
      totalCost = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (usage - 350) * 1300;
    }
  
    // Output
    document.getElementById("result").textContent = `Khách hàng ${name}, Tiền điện: ${totalCost.toLocaleString('vi-VN')} VND`;
  }
  
// Sơ đồ 3 khối:
// 1. Input: Nhập mã khách hàng, loại khách hàng, số kết nối (nếu là doanh nghiệp), và số kênh cao cấp.
// 2. Xử lý: Tính hóa đơn dựa trên phí xử lý hóa đơn, phí dịch vụ cơ bản và phí thuê kênh cao cấp tùy theo loại khách hàng.
// 3. Output: Hiển thị tổng hóa đơn của khách hàng.

function toggleConnectionField() {
    const customerType = document.getElementById("customerType").value;
    const connectionField = document.getElementById("connectionField");
    
    if (customerType === "business") {
        connectionField.style.display = "block";
    } else {
        connectionField.style.display = "none";
        document.getElementById("connections").value = "";
    }
}

function calculateBill() {
    const customerType = document.getElementById("customerType").value;
    const premiumChannels = parseInt(document.getElementById("premiumChannels").value) || 0;
    let connections = parseInt(document.getElementById("connections").value) || 0;

    let processingFee = 0;
    let basicServiceFee = 0;
    let premiumChannelFee = 0;
    let totalBill = 0;

    // Kiểm tra loại khách hàng và tính phí tương ứng
    if (customerType === "individual") {
        processingFee = 4.5;
        basicServiceFee = 20.5;
        premiumChannelFee = premiumChannels * 7.5;
    } else if (customerType === "business") {
        processingFee = 15;
        if (connections <= 10) {
            basicServiceFee = 75;
        } else {
            basicServiceFee = 75 + (connections - 10) * 5;
        }
        premiumChannelFee = premiumChannels * 50;
    }

    // Tính tổng hóa đơn
    totalBill = processingFee + basicServiceFee + premiumChannelFee;

    // Hiển thị kết quả
    document.getElementById("result").innerText = `Tổng Hóa Đơn Cho Khách Hàng ${document.getElementById("customerID").value}: ${totalBill.toFixed(2)} USD`;
}

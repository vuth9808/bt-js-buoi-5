/*
Sơ đồ 3 khối:

1. Input (Dữ liệu đầu vào):
   - Điểm chuẩn (standardScore)
   - Điểm của 3 môn thi (subject1, subject2, subject3)
   - Khu vực ưu tiên (region)
   - Đối tượng ưu tiên (category)

2. Process (Xử lý):
   - Kiểm tra nếu có môn nào đạt điểm 0, thí sinh sẽ "Rớt".
   - Xác định điểm ưu tiên khu vực:
       - Nếu khu vực là "A" thì điểm ưu tiên là 2.
       - Nếu khu vực là "B" thì điểm ưu tiên là 1.
       - Nếu khu vực là "C" thì điểm ưu tiên là 0.5.
       - Nếu không thuộc khu vực ưu tiên, điểm ưu tiên là 0.
   - Xác định điểm ưu tiên đối tượng:
       - Nếu đối tượng là 1 thì điểm ưu tiên là 2.5.
       - Nếu đối tượng là 2 thì điểm ưu tiên là 1.5.
       - Nếu đối tượng là 3 thì điểm ưu tiên là 1.
       - Nếu không thuộc đối tượng ưu tiên, điểm ưu tiên là 0.
   - Tính tổng điểm: tổng điểm 3 môn + điểm ưu tiên khu vực + điểm ưu tiên đối tượng.
   - So sánh tổng điểm với điểm chuẩn:
       - Nếu tổng điểm >= điểm chuẩn thì thí sinh "Đậu".
       - Ngược lại, thí sinh "Rớt".

3. Output (Kết quả đầu ra):
   - Kết quả "Đậu" hoặc "Rớt" và tổng số điểm đạt được.
*/

function calculateAdmission() {
    // Input
    const standardScore = parseFloat(document.getElementById("standardScore").value);
    const subject1 = parseFloat(document.getElementById("subject1").value);
    const subject2 = parseFloat(document.getElementById("subject2").value);
    const subject3 = parseFloat(document.getElementById("subject3").value);
    const region = document.getElementById("region").value;
    const category = parseInt(document.getElementById("category").value);
  
    // Process
    // Kiểm tra xem có môn nào có điểm 0 không
    if (subject1 === 0 || subject2 === 0 || subject3 === 0) {
      document.getElementById("result").textContent = "Rớt (Có môn thi đạt điểm 0)";
      return;
    }
  
    // Xác định điểm ưu tiên khu vực
    let regionPriority = 0;
    if (region === "A") regionPriority = 2;
    else if (region === "B") regionPriority = 1;
    else if (region === "C") regionPriority = 0.5;
  
    // Xác định điểm ưu tiên đối tượng
    let categoryPriority = 0;
    if (category === 1) categoryPriority = 2.5;
    else if (category === 2) categoryPriority = 1.5;
    else if (category === 3) categoryPriority = 1;
  
    // Tính tổng điểm
    const totalScore = subject1 + subject2 + subject3 + regionPriority + categoryPriority;
  
    // Output
    if (totalScore >= standardScore) {
      document.getElementById("result").textContent = `Đậu (Tổng điểm: ${totalScore})`;
    } else {
      document.getElementById("result").textContent = `Rớt (Tổng điểm: ${totalScore})`;
    }
  }
  
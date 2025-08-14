const tenSanPham="Gach Vicenza";

let giaTien=1000000;

// thay đổi giá trị của biến giaTien
giaTien=1200000;

console.log(`Tên sản phẩm: ${tenSanPham}, Giá tiền: ${giaTien}`); // Tên sản phẩm: Gach Vicenza, Giá tiền: 1200000  

// Ham mũi tên với tham số mặc định
const tinhTong = (a = 0, b = 0) => a + b;
console.log(tinhTong(5, 10)); // 15
console.log(tinhTong(5)); // 5
console.log(tinhTong()); // 0

// Tao doi tượng với hàm mũi tên
const userProfile = (name, email, role) => ({
    ten: name,
    email: email,
    vaiTro: role
});

//destructuring
const user = userProfile("Lê Đồng Chung", "chung@example.com", "Developer");
const { ten, email, vaiTro } = user;
console.log(`Tên: ${ten}, Email: ${email}, Vai trò: ${vaiTro}`);

// tao 2 mang
const arrA = [1, 2, 3];
const arrB = [4, 5, 6];

// ghep 2 mang
const arrC = [...arrA, ...arrB];
console.log(arrC); // [1, 2, 3, 4, 5, 6]

// Lấy phần tử bằng ID
const demoBox = document.getElementById("demo-box");
console.log(demoBox);
// Lấy phần tử bằng class
const btnDoiMau = document.querySelector(".btn-doi-mau");
console.log(btnDoiMau);

// Lấy tất cả các phần tư button trên trang
const tatcaButton = document.querySelectorAll("button");
console.log(tatcaButton);

// Thay đổi nội dung của thẻ p trong demo-box
const pElement = demoBox.querySelector("p");
pElement.textContent = "Nội dung đã được thay đổi bằng javascript!";

// Thay đổi màu nền của demo-box 
demoBox.style.backgroundColor = "lightblue";
demoBox.style.padding = "20px";

demoBox.classList.add("noi-bat");

// Thêm sự kiện click cho nút đổi màu nền
const btnAnHien = document.getElementById("btn-an-hien");
// Thêm sự kiện click cho nút ẩn/hiện nội dung
btnAnHien.addEventListener("click", () => {
    const p = demoBox.querySelector("p");
    if (p.style.display === "none") {
        p.style.display = "block";
        btnAnHien.textContent = "Ẩn nội dung";
    } else if (p.style.display === "block") {
        p.style.display = "none";
        btnAnHien.textContent = "Hiện nội dung";
    } else {
        p.style.display = "none";
    }
    
});

// Thêm sự kiện click cho nút đổi màu nền class btn-doi-mau 
//onst btnDoiMau = document.querySelector(".btn-doi-mau");
// Đổi màu nền của demo-box khi nút được nhấn
btnDoiMau.addEventListener("click", () => {
    // Tạo mẫu ngẫu nhiên
    const mauNgauNhien = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    demoBox.style.backgroundColor = mauNgauNhien;
    
});
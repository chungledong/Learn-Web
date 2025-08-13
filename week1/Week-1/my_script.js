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
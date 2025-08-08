// script.js
// === JavaScript Cơ Bản (JS thuần) ===
// Ví dụ về var (không nên dùng trong code mới)
var tenCu = "Nguyen Van A";
console.log(tenCu); // Nguyen Van A
var tenCu = "Tran Thi B"; // Có thể khai báo lại
console.log(tenCu); // Tran Thi B

// Ví dụ về let
let tuoi = 30;
console.log(tuoi); // 30
tuoi = 31; // Có thể gán lại
console.log(tuoi); // 31
// let tuoi = 32; // Lỗi: 'tuoi' has already been declared (không thể khai báo lại)

// Ví dụ về const
const PI = 3.14;
console.log(PI); // 3.14
// PI = 3.14159; // Lỗi: Assignment to constant variable (không thể gán lại)

const nguoi = {
    ten: "Chung",
    tuoi: 45
};
console.log(nguoi); // { ten: 'Chung', tuoi: 45 }
nguoi.tuoi = 46; // Có thể thay đổi thuộc tính bên trong object
console.log(nguoi); // { ten: 'Chung', tuoi: 46 }
// nguoi = { ten: "Mai", tuoi: 20 }; // Lỗi: Cannot assign to constant variable (không thể gán lại toàn bộ object)

//== Arrow Functions (Hàm mũi tên) ==
// Hàm truyền thống
function congTruyenThong(a,b) {
    return a + b;
}
console.log(congTruyenThong(5, 10)); // 15 

// Hàm mũi tên (còn gọi là arrow function) cơ bản
const congArrow = (a, b) => {
    return a + b;
};
console.log("Arrow cơ bản: ", congArrow(5, 10)); // 15

// Hàm mũi tên ngắn ngọn
const nhanArrow = (a, b) => a * b;
console.log("Arrow ngắn ngọn: ", nhanArrow(5, 10)); // 50

// Hàm mũi tên không tham số
const xinChao = () => "Xin chào!";
console.log(xinChao()); // Xin chào!

// Hàm mũi tên với một tham số
const binhPhuong = x => x * x;
console.log(binhPhuong(5)); // 25   

//== Template Literals (Chuỗi mẫu) ===
const ten = "Lê Đồng Chung";
const tuoiNguoi = 45;

// Cách truyền thống với dấu nháy kép
const thongTinCu = "Tên: " + ten + ", Tuổi: " + tuoiNguoi;
console.log(thongTinCu); // Tên: Lê Đồng Chung, Tuổi: 45

// Sử dụng template literals với backticks (``)
const thongTin = `Tên: ${ten}, Tuổi: ${tuoiNguoi}`;
console.log(thongTin); // Tên: Lê Đồng Chung, Tuổi: 45

// Tính toán trong template literals
const a = 5;
const b = 10;
const tong = `Tổng của ${a} và ${b} là ${a + b}`;
console.log(tong); // Tổng của 5 và 10 là 15

//== Destructuring (Phá hủy cấu trúc) ===
const user = {
    name: "Lê Đồng Chung",
    age: 45,
    address: {
        city: "Hà Nội",
        country: "Việt Nam"
    }
};
// Phá hủy cấu trúc đối tượng
const { name, age, address: { city, country } } = user;
console.log(name); // Lê Đồng Chung
console.log(age); // 45
console.log(city); // Hà Nội
console.log(country); // Việt Nam

  // Đổi tên biến khi phá hủy cấu trúc
const { name: tenNguoi, age: tNguoi } = user;
console.log(tenNguoi); // Lê Đồng Chung
console.log(tNguoi); // 45

// Phá hủy cấu trúc mảng
const colors = ["red", "green", "blue"];
const [firstColor, secondColor, thirdColor] = colors;
console.log(`Màu1: ${firstColor}, Màu 2: ${secondColor}, Màu 3: ${thirdColor}`); // red, green, blue

// Bỏ qua một số phần tử trong mảng và lấy phần còn lại
const [first, , third, ...rest] = ["red", "green", "blue", "purple", "yellow"];
console.log(`Màu 1: ${first}, Màu 3: ${third}`); // red, blue
console.log(`Các màu còn lại: ${rest.join(", ")}`); // purple, yellow

//== Spread Operator (Toán tử trải rộng) ===
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
// Kết hợp hai mảng
const combinedArray = [...arr1, ...arr2];
console.log(combinedArray); // [1, 2, 3, 4, 5, 6]

// Sao chép mảng
const arr3 = [...arr1];
console.log(arr3); // [1, 2, 3]

// Thêm phần tử vào mảng
const arr4 = [0,...arr1, 9, 10];
console.log(arr4); // [0, 1, 2, 3, 9, 10]

// Spread operator với đối tượng
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
// Kết hợp hai đối tượng
const combinedObject = { ...obj1, ...obj2 };
console.log(combinedObject); // { a: 1, b: 2, c: 3, d: 4 }

// Sao chép đối tượng
const obj3 = { ...obj1 };
console.log(obj3); // { a: 1, b: 2 }

// Thêm thuộc tính mới vào đối tượng
const obj4 = { ...obj1, e: 5 };
console.log(obj4); // { a: 1, b: 2, e:  5 }

// Ghi đè thuộc tính trong đối tượng
const obj5 = { ...obj1, a: 10 };
console.log(obj5); // { a: 10, b: 2 }

// == Rest Operator (Toán tử còn lại) ===
// Sử dụng rest operator trong hàm
function tinhTong(...so) {
    return so.reduce((tong, num) => tong + num, 0);
}
console.log(tinhTong(1, 2, 3, 4, 5)); // 15



// Sử dụng rest operator trong mảng
const mangSo = [1, 2, 3, 4, 5];
const [first1, second1, ...restNumber] = mangSo;
console.log(`Số đầu tiên: ${first1}, Số thứ hai: ${second1}`); // Số đầu tiên: 1, Số thứ hai: 2
console.log(`Các số còn lại: ${restNumber.join(", ")}`); // Các số còn lại: 3, 4, 5

// Sử dụng rest operator trong đối tượng
const person = {
    name: "Lê Đồng Chung",
    age: 45,
    job: "Developer"
};
const { name: ten1, age: tuoi1, ...restInfo } = person;
console.log(`Tên: ${ten1}, Tuổi: ${tuoi1}`); // Tên: Lê Đồng Chung, Tuổi: 45
console.log(`Thông tin còn lại: ${JSON.stringify(restInfo)}`); // Thông tin còn lại: {"job":"Developer"}

// Sử dụng rest operator trong hàm với đối số
function hienThiThongTin(ten, tuoi, ...thongTinKhac) {
    console.log(`Tên: ${ten}, Tuổi: ${tuoi}`);
    if (thongTinKhac.length > 0) {
        console.log(`Thông tin khác: ${thongTinKhac.join(", ")}`);
    } else {
        console.log("Không có thông tin khác.");
    }
}
hienThiThongTin("Lê Đồng Chung", 45, "Developer", "Hà Nội", "Yêu thích lập trình");
// Tên: Lê Đồng Chung, Tuổi: 45
// Thông tin khác: Developer, Hà Nội, Yêu thích lập trình

//== Promise (Lời hứa) ===
// Tạo một Promise
const promise = new Promise((resolve, reject) => {
    const success = true; // Thay đổi thành false để kiểm tra lỗi
    if (success) {
        resolve("Thành công!");
    } else {
        reject("Thất bại!");
    }
});
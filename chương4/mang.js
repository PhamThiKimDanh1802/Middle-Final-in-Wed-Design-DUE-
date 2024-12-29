// thay thế 
const cars = ["Mazda","Toyota", "BMW"];   //cos thể dùng ket , dùng const k thể thay đôit được 
cars[0]="VinFast";
console.log(cars)

// thêm
const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Lemon");
console.log(fruits)

// đếm 
const fruit = ["Banana", "Orange", "Apple"];
console.log(fruits.length)

/*
viết chương trình trên javascript thực hiện các yêu cầu sau:
- Khởi tạo 1 mảng gồm 3 số nguyên;
- Cập nhật giá trị của phần tử thứ hai trong mảng có giá trị bằng 5;
- Thêm một phần tử mới vào cuối mảng, có giá trị bằng 10;
- Đếm và in ra số lượng phần tử hiện có trong mảng;
- Tính tổng giá trị của các phần tử trong mảng, in kết quả lên màn hình.
*/

const m=[1,2,3]
m[1]=5
m.push(10)

console.log("So phan tu: " + m.length) // m.langth trả về 4 2

let s=0
for (let i=0; i<m.length; i++) // câu lệnh duyệt 
s+=m[i] // tính tổng 
console.log("Tong = " + s)
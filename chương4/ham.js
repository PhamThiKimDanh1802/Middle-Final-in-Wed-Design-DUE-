/*
//tham số mặc định của hàm 
function sum(x, y = 5) // khai báo (biểu thức 1 ngôi)
    {
    console.log(x + y); //gọi hàm 
    }
    
    sum(5); // 10
    sum(5, 15); // 20 và 15 là y bị ghi đè
    sum(1)

 //   Khai báo và gọi hàm trong ES6 (Arrow Function)
 //Ví dụ 1, hàm không có tham số:
 hello = () => {    // khai báo thay vì khai báo truyền thống 
    return "Hello World!";
    }
    console.log(hello());


//ví dụ 2
    const k = [1, -2, 0, 3, -3, 5, 8, -6]; // khai báo mảng 
    demSoDuong = (k) => {           // gọi hàm 
        s = 0; // Khởi tạo biến đếm số phần tử dương
        for (let i in k) { // Duyệt qua từng chỉ số (index) của mảng `m`
            if (k[i] > 0) { // Kiểm tra nếu giá trị tại vị trí `m[i]` lớn hơn 0
                s++; // Tăng biến đếm `s` thêm 1
            }
        }
        return s; // Trả về tổng số phần tử dương
    };
    console.log("So phan tu duong: " + demSoDuong(k));*/
// ví dụ 
let n=[5, -1, -5, -6, 21, 5, 6];
let demsonguyen = (n)=>{
    let dem = 0 ;s =0 
    for (let i=0 ; i<n.length;i++)
        if (n[i]%2==0){
        dem+=1 //biến 
        }
    return dem ;
}

let trungbinhcong = (n) =>
{
    for (let i=0 ; i<n.length;i++)
        if (n[i]%2==0){
        dem+=1 //biến 
        s+n[i]
        }
    return s/dem ;

}
let thaythe = (n) => {
    for (let i=0; i<n.length; i++){
        if(n[i]=5)
            n[i]=10
        console.log(n[i])
    }
}
let dem=demsonguyen(n);
console.log("số lượng số chẳn :"+ dem );
let tbc=trungbinhcong(n);
console.log("trung bình "+ tbc);
thaythe (n)


let m = [5, -1, -5, -6, 21, 5, 6];

// Bước 1: Đếm số nguyên chẵn và tính tổng của chúng
let countEven = 0;
let sumEven = 0;

for (let i = 0; i < m.length; i++) {
    if (m[i] % 2 === 0) {
        countEven++; // Tăng biến đếm
        sumEven += m[i]; // Cộng dồn vào tổng
    }
}

// Bước 2: Tính trung bình cộng của các số nguyên chẵn
let averageEven = countEven > 0 ? sumEven / countEven : 0; // Tránh chia cho 0

// Bước 3: Thay thế tất cả các giá trị 5 bằng 10
for (let i = 0; i < m.length; i++) {
    if (m[i] === 5) {
        m[i] = 10; // Thay thế giá trị
    }
}

// Bước 4: In kết quả
console.log("Số lượng số nguyên chẵn:", countEven);
console.log("Trung bình cộng của các số nguyên chẵn:", averageEven);
console.log("Mảng sau khi thay đổi:", m);

//--------------------------------------------------------------------
let n=[5, -1, -5, -6, 21, 5, 6];
dem = 0 
s =0 
for (let i=0 ; i<n.length;i++)
    if (n[i]%2==0){
        dem+=1 //biến 
        s+=n[i]}
console.log("số lượng số chẳn :"+ dem )
console.log("trung bình "+ (s/dem))
for (let i=0; i<n.length; i++){
    if(n[i]=5)
        n[i]=10
    console.log(n[i])}
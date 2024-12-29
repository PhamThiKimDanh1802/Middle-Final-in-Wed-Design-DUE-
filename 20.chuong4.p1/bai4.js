
const numbers = [3, 5, 7, 2, 8, 1, 4];
let maxNumber = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
        maxNumber = numbers[i]; 
    }
}
console.log("So lon nhat trong mang:", maxNumber);

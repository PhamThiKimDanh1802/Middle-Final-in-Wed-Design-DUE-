let m = ['banana', 'orange', 'apple', 'mango'];
let s = false;
for (let i = 0; i < m.length; i++) {
    if (m[i].trim() === 'apple') { 
        s = true; 
        break; 
    }
}
if (s) {
    console.log("apple có trong mảng.");
} else {
    console.log("apple không có trong mảng.");
}

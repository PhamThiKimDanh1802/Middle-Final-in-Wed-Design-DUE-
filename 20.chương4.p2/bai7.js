const m = [10, 5, 8, 12, 15, 7];
const timkiem = (m) => {
    const i = m.sort((a, b) => b - a);
    return i[1];
};
console.log(timkiem(m)); 

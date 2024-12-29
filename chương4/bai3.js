let nam = 2023

 if (nam % 4 === 0 && nam % 100 !== 0) {
     console.log(nam + " la nam nhuan");
 } 
 else if (nam % 400 === 0) {
    console.log(nam + " la nam nhuan");
 } 
 else {
    console.log(nam + " khong phai la nam nhuan");
}


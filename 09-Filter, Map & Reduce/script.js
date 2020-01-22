const angka = [-1, 3, 4, 2, 3, -3, 2, 3, 1, 9];

//mencari angka >= 3
// filter menggunakan for
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//     if (angka[i] >= 3) {
//         newAngka.push(angka[i]);
//     }
// }

// console.log(newAngka);

//filter menggunakan filter
// const newAngka = angka.filter(function (a) {
//     return a >= 3;
// });

// console.log(newAngka);

//filter menggunakan filter menggunakan errow function HANNYA SEBARIS
//const newAngka = angka.filter(a => a >= 3);
//console.log(newAngka);

//filter menggunakan map
//kalikan semua angka dengan 2
// const newAngka = angka.map(a => a * 5);
// console.log(angka);
// console.log(newAngka);

//reduce
//jumlahkan semua elemen pada array
//[-1+ 3+ 4+ 2+ 3+ -3+ 2+ 3+ 1+ 9];
//const newAngka = angka.reduce((accumulator, carrentValue) => accumulator + carrentValue);
//console.log(newAngka);

//bisa seperti ini
//[(5)-1+ 3+ 4+ 2+ 3+ -3+ 2+ 3+ 1+ 9]; //sebenearnya angka 5 itu ada default angka 0 maka bisa di ganti
// const newAngka = angka.reduce((accumulator, carrentValue) => accumulator + carrentValue, 5);
// console.log(newAngka);

//method chaining atau method berantai bisa menggabungkan fungsi2 dalam satu fungsi
//mencari angka > 5
//kali 3
//jumlahkan
const hasil = angka.filter(a => a > 3) //4,9
    .map(a => a * 2) // 8,16
    .reduce((acc, cur) => acc + cur); //
console.log(hasil);
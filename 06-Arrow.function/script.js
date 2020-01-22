//fuunction Expression
// const tampilNama = function (nama) {
//     return `hello, ${nama}`;
// }

// console.log(tampilNama('dian'));


//parameter hanya satu
// const tampilNama = (nama) => { return `helo, ${nama}`; }
// console.log('dian bugas');


//parameter dua
// const tampilNama = (nama, waktu) => {
//     return `selamat ${waktu}, ${nama}`;
// }
// console.log(tampilNama('Erik', 'Malam'));

//parameter hanya 
// ----- implisit return secara otomatis jadi return
// const tampilNama = nama => `helo, ${nama}`; //nama adalah parameternya
// console.log('dian bugas');

//lebih ringkas lagi
// const tampilNama = () => `helo dian`;
// console.log(tampilNama());

let mahasiswa = ['sandika galih', 'dian', 'bugas'];
// let jumlahHuruf = mahasiswa.map(function (nama) {
//     return nama.length;
// });

// console.log(jumlahHuruf);

// mengubah jadi error function
// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);
// mengembalikan dalam bentuk objek bukan dalam bentuk array lagi gunakan buka kurung sehingga jadi objek
let jumlahHuruf = mahasiswa.map(nama => ({ nama: nama, jumlahHuruf: nama.length })); //nama pertama properti dan yg ke dua nilainya
console.table(jumlahHuruf);

//Execution Context, Hoisting & Scope
// console.log(nama);
// var nama = 'dian';

//creation phase pada Global Context
//nama var  = undefined 
// nama function =  fc()
//------semua ini namanya hoisting----istilahnya di derek ke atas seperti bendera

//window = global projek
//this = window dua2nya ini merupakan sudah bawaan javascript

//execution phase--> di eksekusi dari atas ke bawah
// console.log(seyHello());
// var nama = 'dian';
// var umur = 33;
// function seyHello() {
//     retrun`helo, nama saya ${nama}, saya ${umur}, tahun`;
// }

//function membuat location execution context 
//yang di dalamnya terdapat creation dan exection phase
//window
//arguments
//hoisting

// var nama = 'dian';
// var username = 'dianbugas@gmail.com';

// function cetakURL(username) {
//     var instagramURL = 'http://instagram.com';
//     return instagramURL + username;
// }

// console.log(cetakURL('username@dsa'));




// function a() {
//     console.log('ini a');

//     function b() {
//         console.log('ini b');

//         function c() {
//             console.log('ini c');
//         }
//         c();
//     }
//     b();
// }
// a();

//latihan
function satu() {
    var nama = 'dian';
    console.log(nama);
}

function dua() {
    console.log(nama);
}

console.log(nama);
var nama = 'erik';
satu();
dua('dodu');
console.log(nama);

// function init() {
//     let nama = 'dian';
//     let umur = 33;
//     function tampilNama() {
//         //let nama = 'bugas'; //maka nama yang akan di panggil nama yg di local nya klu di aktifkn
//         console.log(nama);
//         console.log(umur);
//     }
//     console.dir(tampilNama);
// }
// init();


//anonimus function

///-----------kegunaaan closure
//untuk membuat function fectories
//untuk membuat private method

//ini adalah iner function
function ucapkanSalam(waktu) {
    return function (nama) {
        return `halo ${nama}, selamat ${waktu}, semoga hari ni menyenangkan`;
    }
}

let selamatPagi = ucapkanSalam('Pagi');
let selamatSiang = ucapkanSalam('Siang');
let selamatMalam = ucapkanSalam('Malam');

console.dir(selamatMalam('dian'));

// function init() {
//     return function (nama) {
//         console.log(nama);
//     }
// }

// let panggilNama = init();
// panggilNama('dian');
// panggilNama('dian');

//---------------->contoh lain
let tambah = (function () {
    let counter = 0;
    return function () {
        return ++counter;
    }
})();

let tambah1 = (function () {
    let counter = 0;
    return function () {
        return ++counter;
    }
})();

counter = 100; //ketika ini di jalankan juga maka variabel counter yg diatas tidak akan terganggu
console.log(tambah());
console.log(tambah());
console.log(tambah1());
console.log(tambah());
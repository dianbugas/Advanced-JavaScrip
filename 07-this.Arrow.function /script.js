// //contruktor function
// const Mahasiswa = function () {
//     this.nama = 'dian';
//     this.umur = 33;
//     this.seyHelo = function () {
//         console.log(`helo, nama saya ${nama}, dan umur saya ${umur}, tahun`);
//     }
// }

// const dian = new Mahasiswa();

//ubah jadi errow function
//contruktor function
// const Mahasiswa = function () {
//     this.nama = 'dian';
//     this.umur = 33;
//     this.seyHelo = () => { //pada saat menggunakan errow function sebenarnya dia mengmbil dari luar dan tidak mengunakan kontek this
//         console.log(`helo, nama saya ${this.nama}, dan umur saya ${this.umur}, tahun`);
//     }
// }

// const dian = new Mahasiswa();

//objek literal
const mhs1 = {
    nama = 'dian',
    umur = 33,
    seyHelo: () => {
        console.log(`helo, nama saya ${this.nama}, dan umur saya ${this.umur}, tahun`);
    }
}
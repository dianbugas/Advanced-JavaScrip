//cara membuat obejek pada javascript
//----tidak efektif untuk projek yang banyak

//----------1 Objek Literal---------
// let mahasiswa = {
//     //properti
//     nama: 'dian',
//     energi: 10,
//     //method
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Helo ${this.nama}, Selamat Makan`);
//     }
// }

// let mahasiswa1 = {
//     //properti
//     nama: 'bugas',
//     energi: 20,
//     //method
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Helo ${this.nama}, Selamat Makan`);
//     }
// }


//---------2 Function deklaration----------
//tidak perlu di duplikat seperti objek literal
//lebih efektif lagi cuma satu kali di simpan methodnya di memori
// const methodMahasiswa = {
//     //method
//     makan: function (porsi) {
//         this.energi += porsi;
//         console.log(`halo ${this.nama}, selamat makan`);
//     },

//     main: function (jam) {
//         this.energi -= jam;
//         console.log(`halo ${this.nama} selamat bermain`);
//     },

//     tidur: function (jam) {
//         this.energi += jam * 2;
//         console.log(`halo ${this.nama}, selamat tidur`);
//     }
// };

// function Mahasiswa(nama, energi) { //templete
//     let mahasiswa = Object.create(methodMahasiswa); //beda dgn yang lain ini lebih efektif dan bisa menyimpan objek di dalam nya. dan membawa objek methodMahasiswa YG DIKEDAL DENGAN PEWARISAN
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
//     //------kelemahan mengelola dua objek jadi di hapus dan ada cara otomatis nnya
//     // mahasiswa.makan = methodMahasiswa.makan;
//     // mahasiswa.main = methodMahasiswa.main;
//     // mahasiswa.tidur = methodMahasiswa.tidur;
//     return mahasiswa; //objek
// }

// //objek
// let bugas = Mahasiswa('bugas', 10);
// let dian = Mahasiswa('dian', 12);




function Mahasiswa(nama, energi) { //templete
    //let mahasiswa = Object.create(methodMahasiswa); 
    //let mahasiswa = {}; // deklarasi bisa sama dgn objek di bawah

    //dibelakang layar js nya membuatkan variabel this yg bentuk nya objek
    //let this = Object.create(Mahasiswa.prototype);

    this.nama = nama;
    this.energi = energi;

    //return mahasiswa; //objek
    //return this;
}

//memanfaatkan prototype
Mahasiswa.prototype.makan = function (porsi) {
    this.energi += porsi;
    return `helo ${this.nama}, selamat makan`;
}

let dian = new Mahasiswa('dian', 10);




//3 Construktor Function
//keywprd new (sering di gunakan) tidak perlu deklarasi variabel dan ruturn nya karena otomatis

// function Mahasiswa(nama, energi) { //templete
//     this.nama = nama;
//     this.energi = energi;

//     //method
//     this.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`halo ${this.nama}, selamat makan`);
//     }

//     this.main = function (jam) {
//         this.energi -= jam;
//         console.log(`halo ${this.nama} selamat bermain`);
//     }
// }

// let dian = new Mahasiswa('dian', 10);



//4 Objek create
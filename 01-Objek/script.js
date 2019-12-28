//cara membuat obejek pada javascript
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
// function Mahasiswa(nama, energi) { //templete
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     //method
//     mahasiswa.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`halo ${this.nama}, selamat makan`);
//     }

//     mahasiswa.main = function (jam) {
//         this.energi -= jam;
//         console.log(`halo ${this.nama} selamat bermain`);
//     }

//     return mahasiswa; //objek
// }

// //objek
// let bugas = Mahasiswa('bugas', 10);
// let dian = Mahasiswa('dian', 12);




//3 Construktor Function
//keywprd new (sering di gunakan) tidak perlu deklarasi variabel dan ruturn nya karena otomatis

function Mahasiswa(nama, energi) { //templete
    this.nama = nama;
    this.energi = energi;

    //method
    this.makan = function (porsi) {
        this.energi += porsi;
        console.log(`halo ${this.nama}, selamat makan`);
    }

    this.main = function (jam) {
        this.energi -= jam;
        console.log(`halo ${this.nama} selamat bermain`);
    }
}

let dian = new Mahasiswa('dian', 10);



//4 Objek create
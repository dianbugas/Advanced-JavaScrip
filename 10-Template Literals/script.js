// //template literal / template string (sederhana)
const nama = 'dian bugas';
const umur = 33;
console.log(`Halo, nama saya ${nama}, dan saya ${umur}, umur`);

//embedded Expressions 
// console.log(`${1 + 1}`);
// console.log(`${alert('halo!')}`);

//expresi pengkondisian
const x = 10;
console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`);

// html
const mhs = {
    nama: 'sandhika galih',
    umur: 33,
    nrp: '023423431',
    email: 'dianbuags@gamial'
}

const el = `<div class="mhs">
<h2>${mhs.nama}</h2>
<span class="nrp">${mhs.nrp}</span>
</div>`;

console.log(el);
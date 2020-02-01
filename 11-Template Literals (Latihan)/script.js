// 1 .
// html Template Literals (Latihan)
// const mhs = {
//     nama: 'sandhika galih',
//     umur: 33,
//     nrp: '023423431',
//     email: 'dianbuags@gamial'
// }

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nrp">${mhs.nrp}</span>
// </div>`;

// 2.
//lopping / mengulang data yang di dapat kan
// const mhs = [{
//         nama: 'sandiak asd',
//         email: 'asdsa@das.das'
//     },
//     {
//         nama: 'asdasd asd',
//         email: 'asdadassa@das.das'
//     },
//     {
//         nama: 'sasadas asd',
//         email: 'sadsad@das.das'
//     }
// ];

// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//         <li>${m.nama}</li>
//         <li>${m.email}</li>
//     </ul>`).join('')}
// </div>`

// 3. condisionals
//ternary 
//pengkondisian
// const lagu = {
//     jduul: 'tetap dalam jiwa',
//     penyanyi: 'dian',
//     //feat: 'dian'
// }
// //pengkondisian
// const el = `<div class="lagu>"
//     <ul>
//         <li>${lagu.penyanyi}</li>
//         <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
//     </ul>
//     </div>
// `;

// 4. Nested
//HTML FRAGMENTS BERSARANG

const mhs = {
    nama: 'dia bugas',
    semester: 3,
    matkul: [
        'bpbo',
        'sks',
        'oop',
        'sbo'
    ]
};

function cetakmatkul(matkul) {
    return `
        <ol>
            ${matkul.map(mk => `<li>${mk}</li>`).join('')}
        </ol>
    `;
}

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="semester">Semester : ${mhs.semester}</span>
    <h4>Matkul : </h4>
    ${cetakmatkul(mhs.matkul)}
</div>`;

//menampilkan ke dalam html ferkuen
document.body.innerHTML = el;
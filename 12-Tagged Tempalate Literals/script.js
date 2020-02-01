//1 // tagged tempates
// const nama = 'dian';
// const umur = 33;

// function coba(strings, ...values) {
//     //     let result = '';
//     //     strings.forEach((str, i) => {
//     //         result += `${str}${values[i] || ''}`;
//     //     });
//     //     return result;
//     // }

//     //cara gampamng hayer order fungssion yaitu radius yaitu menggabungkan erray

//     return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''} `, '');
// }

// const str = coba `halo, nama saya ${nama}, saya ${umur} tahun.`;
// console.log(str);

// highlight
const nama = 'dian';
const umur = 33;
const email = 'dianbugas@gmail.com';

function highlight(strings, ...values) {
    return strings.reduce((result, str, i) => `${result}${str}<span class="h1">${values[i] || ''}</span> `, '');
}

const str = highlight `halo, nama saya ${nama}, saya ${umur} tahun, dan email saya adalah: ${email}.`;
document.body.innerHTML = str;
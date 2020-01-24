const videos = Array.from(document.querySelectorAll('[data-duration]')); //kita ubah query selector menjadi array
console.log(videos);

// pilih nynya yang 'js lanjutan'
let jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

    //ambil durasi masing2 vidio
    .map(item => item.dataset.duration)

    //ubah durasi menjadi float, ubah menit menjadi detik
    .map(waktu => {
        //10:30 -> [10,30] split
        const parts = waktu.split(':').map(part => parseFloat(part)); //di ubah jadi fload
        return (parts[0] * 60) + parts[1]; // ini masih string
    })

    //jumlahkan semua detiknya
    .reduce((total, detik) => total + detik);

//ubah formatnya jam menit detik
// catatan 
//pembulatan ke bawah ==> floor 
//pembulatan ke atas ==> shail
//pembulatan paling terdekat ==> raound
const jam = Math.floor(jsLanjut / 3600);

jsLanjut = jsLanjut - jam * 3600;

const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;

//sumpan di DOM  
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam}, ${menit} Menit, ${detik} Detik.`;

const jmlVidio = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const pJmlVidio = document.querySelector('.jumlah-vidio');
pJmlVidio.textContent = `${jmlVidio} Vidio.`;

console.log(jsLanjut);
console.log(jam);
console.log(menit);
console.log(detik);
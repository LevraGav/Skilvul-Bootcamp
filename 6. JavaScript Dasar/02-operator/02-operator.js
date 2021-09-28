/// Soal - 01
/// Dibawah ini akan ditampilkan daftar pengeluaran bulan ini beserta gaji yang akan diterima, tugas-mu adalah untuk menghitung gaji yang terleftOver

/// Pengeluaran
let gundam = 750000,
    makan = 2000000,
    kost = 1000000,
    subscription = 250000,
    totalCost = gundam + makan + subscription + kost;

/// Gaji
// / gajiPokok = 5000000
// / gajiBonus = 10% dari gajiPokok
// / gajiLembur = 5% dari gajiPokok

let gajiPokok = 5000000,
    gajiBonus = 0.1 * gajiPokok,
    gajiLembur = 0.05 * gajiPokok,
    totalIncome = gajiPokok + gajiLembur + gajiBonus;

/// leftOver Gaji
const sisaGaji = (totalIncome - totalCost);
let number = sisaGaji;
	
let	number_string = number.toString(),
	leftOver 	= number_string.length % 3,
	rupiah 	= number_string.substr(0, leftOver),
	ribuan 	= number_string.substr(leftOver).match(/\d{3}/g);
		
if (ribuan) {
	separator = leftOver ? '.' : '';
	rupiah += separator + ribuan.join('.');
}

console.log(rupiah);


/// Soal - 02
/// Gunakan operator yang tepat untuk mengetahui apakah 2 variable dibawah ini memiliki nilai yang sama (tipe data tidak termasuk)
const oneInString = "1";
const oneInNumber = 1;
const isSame = oneInString == oneInNumber;
console.log(isSame);

/// Soal - 03
/// Gunakan operator yang tepat untuk mengetahui apakah studentA memiliki nilai yang lebih tinggi atau sama dengan studentB
const studentA = 75;
const studentB = 80;
const isHigher = studentA >= studentB;
console.log(isHigher);

/// Soal - 04
/// Gunakan operator yang tepat untuk membedakan 2 buah variable yang terdapat pada soal-02 berdasarkan value-nya (tipe data juga dihitung)
const final = oneInString === oneInNumber;
console.log(final);
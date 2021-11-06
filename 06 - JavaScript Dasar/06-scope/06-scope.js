/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// WRITE YOUR ANALYSIS HERE
/// - ada berapa banyak jumlah variable scope pada Javascript?
Pada javascript terdapat dua jenis variable scope, yaitu variable local dan variable global

/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
Local scope variabel 
Variabel yang berada di dalam fungsi sehingga variabel ini hanya dapat berfungsi di dalam function tempat ia di deklarasikan dan
tidak dapat dijangkau oleh function yang lain. 

Global scope variable 
variabel ini dideklarasikan di luar sebuah function sehingga variabel ini dapat di akses di seluruh function yang ada di dalam program.

/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript
1. Local scope
    function halloScope(){
        var ini_local_scope_variable = "ini adalah contoh local scope variable"; //Variabel berada di dalam function
    }

2. global scope
    var ini_global_scope_variable; //variabel berada di luar function
    function halloScope(){
        ini_global_scope_variable = "ini adalah contoh global scope variable" 
    }
    function helloScope(){
        ini_global_scope_variable = "aku juga bisa dipanggil disini" 
    }

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
/// - apa yang akan tampil didalam comsole.log ?
Ketika console log dijalankan maka akan muncul output berupa "Mariah"

/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?
Penyebab dari hasil console.log bukan dari variable name adalah karena pada saat console.log dijalankan, kita mmemberikan string yang bernilai "Mariah Carey" ke dalam parameter name (bukan variabel) 
yang berada pada function printFirstName. Oleh karena itu inputan yang diproses oleh function ini adalah string yang dipassing ke dalam parameter yaitu 
Mariah Carey, bukan John Watson.

///
const name = "John Watson";

function printFirstName(name) {
    return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));
/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE
/// - Type Error
A TypeError happens when a value has a type that’s different than the one expected.
The simplest example is trying to invoke a number:
1() //TypeError: 1 is not a function

// Reference Error
A ReferenceError indicates that an invalid reference value has been detected: a JavaScript program is 
trying to read a variable that does not exist.
example :
dog //ReferenceError: dog is not defined
dog = 2 //ReferenceError: dog is not defined
Be aware that the above statement will create a dog variable on the global object if not ran in strict mode.

//Range Error
A RangeError will fire when a numeric value is not in its range of allowed values.
The simplest example is when you set an array length to a negative value:
[].length = -1 //RangeError: Invalid array length

// Syntax error
A SyntaxError is thrown if you try to evaluate code with a syntax error.
example
function() {
    return 'Hi!'
}
SyntaxError: function statement requires a name

Sumber : https://flaviocopes.com/javascript-errors/

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
//salaryWithConst
ReferenceError: Cannot access 'salaryWithConst' before initialization
ReferenceError pada console.log(salaryWithConst) karena kita berusaha untuk mengakses variabel bertipe const (konstan) yang belum di inisialisasi.

//salaryWithVar
tidak ada error pada console.log(salaryWithVar) karena di dalam javascript, type var membuat variabel dapat di akses bahkan jika di awal tidak diinisialisasi,
namun variabel tersebut tetap harus diinisiasi di dalam program.

console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;
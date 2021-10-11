// 1. Apa itu synchronous?
// Seperti namanya, sinkron berarti berada dalam urutan, yaitu setiap pernyataan kode dieksekusi satu per satu. Jadi, pada dasarnya sebuah pernyataan 
// harus menunggu pernyataan sebelumnya untuk dieksekusi.
// https://www.geeksforgeeks.org/synchronous-and-asynchronous-in-javascript/

// 2. Apa itu asynchronous?
// Kode asinkron memungkinkan program untuk dieksekusi segera di mana kode sinkron akan memblokir eksekusi lebih lanjut dari kode yang tersisa hingga menyelesaikan yang sekarang. 
// Ini mungkin tidak terlihat seperti masalah besar tetapi ketika Anda melihatnya dalam gambaran yang lebih besar, Anda menyadari bahwa itu dapat menyebabkan penundaan 
// Antarmuka Pengguna.
// https://www.geeksforgeeks.org/synchronous-and-asynchronous-in-javascript/

// 3. Dapatkah kita menerapkan konsep asynchronous pada browser?
// Bisa, dengan menggunakan Javascript

// 4. Apa hasil yang akan tercetak pada baris kode dibawah?
/*
first log:  1
first log:  2
first log:  3
first log:  4
first log:  5
second log:  6
second log:  6
second log:  6
second log:  6
second log:  6
*/

// 5. Apabila terdapat ketidaksamaan antara console.log pertama dan kedua, bisakah kalian memberikan penjelasan mengapa hal tersebut bisa terjadi?
// karena variable i di deklarasi dengan menggunakan var sehingga menjadikannya variabel global. Variable i pun telah berubah karena first log (karena i memiliki alamat yang sama) 
//jika waktu sudah melebihi 100 seconds maka dari first log akan berpindah ke second log, dan menampilkan angka perulangan sampai 6

// 6. Perbaiki baris kode dibawah sehingga ia akan menampilkan angka yang sama
// Cukup mengganti var dengan let
// for (var i = 1; i <= 5; i++) {
//     console.log("first log: ", i); // 01 - Pertama
//     setTimeout(() => console.log("second log: ", i), 100); // 02 - Kedua
// }

for (let i = 1; i <= 5; i++) {
   console.log("first log: ", i); // 01 - Pertama
   setTimeout(() => console.log("second log: ", i), 100); // 02 - Kedua
}
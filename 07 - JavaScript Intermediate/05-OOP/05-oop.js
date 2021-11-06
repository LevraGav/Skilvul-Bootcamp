//No 1
// TULIS ANALISA ANDA DIBAWAH
// 1. Apa yang akan terjadi apabila kita jalankan baris kode dibawah?
// Akan ditampilkan bahwa fun1 bertipe data object yang memiliki isi seperti pada output dibawah
// sedangkan fun2 juga bertipe data object namun tidak memiliki isi (kosong)
/* output : 
   fun1 { fun1: [Function: fun1], fun2: [Function: fun2] }
   fun2 {...}
*/

// 2. Apakah hasil dari fun1 dan fun2 itu sama?
// Berbeda, fun1 merupakan object yang memiliki isi, sedangkan fun2 adalah object yang kosong

// 3. Buatlah sebuah alasan dari poin ke-2, mengapa baris kode tersebut menampilkan hasil baik itu sama ataupun tidak.
// Kode menampilkan hasil yang berbeda karena fun1 ditulis dengan menggunakan function(), sedangkan fun2 ditulis dengan menggunakan arrow function
// Hal ini menyebabkan saat kode dibaca, this pada fun1 akan menunjuk pada objek instannya yaitu obj
// Sedangkan pada fun2, this tidak menunjuk pada kode apa pun karena arrow function tidak memiliki this yang menunjuk kepada apapun (dirinya sendiri maupun object instan)

// const obj = {
//    fun1: function() {
//       console.log("fun1", this);
//    },
//    fun2: () => {
//       console.log("fun2", this);
//    }
// };

// obj.fun1();
// obj.fun2();

//No 2
// 1. Apa itu Encapsulation? Mengapa kita membutuhkannya?
// Encapsulation atau pengkapsulan adalah konsep tentang pengikatan data atau metode yang berbeda yang disatukan atau “dikapsulkan” menjadi satu unit data. Encapsulation dapat 
// mempermudah dalam pembacaan code karena informasi yang disajikan tidak perlu dibaca secara rinci dan sudah merupakan satu kesatuan.
// Encapsulation juga sering digunakan karena terdapat fitur information-hiding mechanism. Mekanisme ini menghilangkan akses publik ke atribut-atribut yang terdapat di dalam 
// “kapsul” tersebut. Metode ini dapat memudahkan anda dalam mendefinisikan atribut apa saja yang dapat dibaca dan diperbarui.

// 2. Apa itu Abstraction? Mengapa kita membutuhkannya?
// Abstraction adalah sebuah teknik untuk menyembunyikan detail tertentu dari sebuah objek/method dan hanya menampilkan fungsionalitas atau fitur penting dari objek tersebut.
// Berfungsi untuk menyembunyikan detail yang tidak terlalu penting sehingga lebih mudah dibaca dan terorganisir apa saja fitur-fitur utama/penting yang dibangun.

// 3. Apa itu Inheritance? Mengapa kita membutuhkannya?
// Inheritance merupakan konsep mewariskan attribute dan method yang dimiliki oleh sebuah class kepada class turunannya. Dengan konsep ini class yang dibuat cukup mendefinisikan 
// attribute dan method yang spesifik didalamnya, sedangkan attribute dan method yang lebih umum akan didapatkan dari class yang menjadi induknya.
// Dengan Inheritance, suatu kode yang telah ditulis pada kelas parent class dapat digunakan berulang kali pada kelas-kelas turunannya 
// Juga bermanfaat untuk mengurangi kemungkinan munculnya bug

// 4. Apa itu Polymorpishm? Mengapa kita membutuhkannya?
// Polymorphism merupakan konsep yang memungkinkan digunakannya suatu interface yang sama untuk memerintah suatu object agar melakukan suatu tindakan yang mungkin secara prinsip sama 
// tetapi secara proses berbeda.
// Polymorphism bermanfaat ketika ada fungsi yang sama, maka fungsi tersebut dapat digunakan pada tipe yang berbeda sehingga membuat programming menjadi lebih efisien.

//No 3
class Phone {
   constructor(brand, storage, ram){
      this.brand = brand;
      this.storage = storage;
      this.ram = ram;
   }

   getBrandName(){
         return this.brand;
   }

   setBrandName(newBrand){
         this.brand = newBrand;
   }

   printSpecification(){
         console.log(`Ponsel ini memiliki storage: ${this.storage} dan ram: ${this.ram}`);
   }

   setSpecification(storage, ram){
         this.storage = storage;
         this.ram = ram;
   }
}

const phone = new Phone("Skilvul Mobile co", 64, 4);

console.log("Number 3");
console.log(phone.getBrandName());
phone.setBrandName("SM.co")
console.log(phone.getBrandName());

phone.printSpecification();
phone.setSpecification(32, 2);
phone.printSpecification();

//No 4
class Student {
   constructor(name, gender) {
      this.name = name;
      this.gender = gender;
      this.courseOfferings = [];
   }

   getIndexFromCourse(course) {
      const indexOfCourse = this.courseOfferings.findIndex((courseOffering) => {
         return courseOffering.course.getSubject() === course.getSubject();
      });
      return indexOfCourse;
   }
   
   takeNewCourse(course) {
      // check if course already in array
      const isCourseExist = this.courseOfferings.find((courseOffering) => {
         return courseOffering.course.getSubject() === course.getSubject();
      });

      // push the course into array if the course not exist yet
      if (this.courseOfferings.length === 0 || !isCourseExist) {
            this.courseOfferings.push(new CourseOffering(course));
            course.decreaseQuota();
      }
   }
   
   courseAttendance(course) {
      const indexOfCourse = this.getIndexFromCourse(course);

      if (indexOfCourse >= 0) {
         this.courseOfferings[indexOfCourse].attendance++;
      }
   }

   takeATest(course) {
      const indexOfCourse = this.getIndexFromCourse(course);
      if (indexOfCourse >= 0) {
         if (this.courseOfferings[indexOfCourse].attendance >= course.getAttendance()) {
            this.courseOfferings[indexOfCourse].grade = Math.floor(Math.random() * 100);
         } 
         
         else {
            console.log("\nNumber 4");
            console.log("please fill your absent");
         }
      }
   }
}

class CourseOffering {
   constructor(course) {
      this.course = course;
      this.attendance = 0;
      this.grade = 0;
   }
}

class Course {
   constructor(subject, quota, attendance) {
      this.subject = subject;
      this.quota = quota;
      this.attendance = attendance;
   }

   getSubject() {
      return this.subject;
   }

   getAttendance() {
      return this.attendance;
   }

   decreaseQuota() {
      this.quota--;
   }
}
   
const biology = new Course("biology", 10, 3);
const physics = new Course("physics", 10, 2);

const johnWatson = new Student("john watson", "male");

johnWatson.takeNewCourse(biology);
johnWatson.takeNewCourse(physics);

johnWatson.courseAttendance(physics);
johnWatson.courseAttendance(physics);
johnWatson.courseAttendance(biology);
johnWatson.courseAttendance(physics);

console.log(biology.quota);
console.log(physics.quota);

johnWatson.takeATest(biology);
johnWatson.takeATest(physics);

console.log(johnWatson.courseOfferings);
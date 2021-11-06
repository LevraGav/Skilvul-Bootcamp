/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE
for (let i = 1; i <= 100; i++) {
    let flag = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
        process.stdout.write(i + ", ");
    }
}
console.log("");

/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop 
let primeCounter = 0;
let fiftiethPrime = 2;

/// EDIT HERE
while(primeCounter < 50)
{
    let flag = 0;
        for(let i = 2; i < fiftiethPrime; i++)
        {
            if(fiftiethPrime % i == 0)
            {
                flag = true;
            } 
        }

        if(flag != true)
        {
            primeCounter++;
        }

        if(primeCounter == 50)
        {
            console.log(fiftiethPrime);
        }
    fiftiethPrime++;
}

/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
let oddCounter = 0;
let fiftiethOdd = 0;

/// EDIT HERE
do {
    if(fiftiethOdd % 2 != 0){
        oddCounter++;
    }

    if(oddCounter == 50){
        console.log(fiftiethOdd);
    }

    fiftiethOdd++;
} 
while (oddCounter<50)
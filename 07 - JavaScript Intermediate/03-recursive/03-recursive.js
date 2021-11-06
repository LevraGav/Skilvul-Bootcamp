//No 1
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];
function sumOfArray(arr) {
    if(arr.length === 0){
        return 0;
    }

    function add(arr, i){
        if(i === arr.length-1){
            return arr[i];
        }
        return arr[i] + add(arr, i+1);
    }
    return add(arr, 0);
}

console.log("Number 1");
console.log(sumOfArray(arr1));
console.log(sumOfArray(arr2));

//No 2
const avg1 = sumOfArray(arr1) / arr1.length;
const avg2 = sumOfArray(arr2) / arr2.length;

function countAboveAvg(arr, avg) {
    if(arr.length === 0){
        return 0;
    }

    let count = 0;
    if (arr[0] >= avg) {
        count = 1;
    }
    return count + countAboveAvg(arr.slice(1), avg);
}

const totalAboveAvg1 = countAboveAvg(arr1, avg1);
const totalAboveAvg2 = countAboveAvg(arr2, avg2);

console.log("\nNumber 2");
console.log(totalAboveAvg1);
console.log(totalAboveAvg2);

//No 3
const arr = [1, 2, 3, 4, 5];
function searchInArray(arr, num) {
    if (arr[arr.length - 1] === num) {
        return console.log(`Angka ditemukan pada index : ${arr.length - 1}`)
    }

    else if (arr.length === 1) {
        return console.log("Angka tidak ditemukan")
    }

    const arr1 = arr.slice(0, -1)
    return searchInArray(arr1, num)
}

console.log("\nNumber 3");
searchInArray(arr, 6);
searchInArray(arr, 1);
searchInArray(arr, 8);

//No 4
function trianglePattern(x, y) {
    if (x == 0) {
        return;
    }
    
    else{
        let blank_space = "";

        for (let i = 0; i < y; i++) {
            if (i < x - 1) {
                blank_space = blank_space + " "
            }

            else {
                blank_space = blank_space + String.fromCharCode(64 + (y - x + (i - x) + 2))
            }
        }

        console.log(blank_space);
        trianglePattern(x - 1, y)
    }
}

console.log("\nNumber 4");
trianglePattern(5, 5);
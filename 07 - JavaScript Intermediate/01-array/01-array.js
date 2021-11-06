//No 1
const arr = [1, 2, 3];
const arr2 = [8, 1, 5, 7];

function reverse(reversed_array) {
    let newArray = [];
    for (let i = reversed_array.length - 1; i >= 0; i--) {
        newArray.push(reversed_array[i]);
    }
    return newArray;
}

const newArr = reverse(arr);
const newArr2 = reverse(arr2);

console.log("Number 1");
console.log(arr, newArr);
console.log(arr2, newArr2);

//No 2
const array1 = [1, 3, 4, 1, 2, 8];
const array2 = [5, 6, 7, 8, 1, 3];

function getAverage(count_average) { 
    let sum = 0;
    let num = [];
    for (let i = 0; i < count_average.length; i++){
        sum += count_average[i];
    }

    let count_array = count_average.length;
    let average = sum / count_array;
    
    for (let i = 0; i < count_average.length; i++){
        if(count_average[i] > average){
            num.push(count_average[i]);
        }
    }
    return num.length;
}

console.log("\nNumber 2");
console.log(getAverage(array1));
console.log(getAverage(array2));

//No 3
const array_of_number = [
    [10],
    [9, 7, 1],
    [2, 8],
];

function searchInArray(array_of_number, number) {
    let temporary = [];
    
    for(let i = 0; i < array_of_number.length; i++){
        let number = array_of_number[i];

        for(let j = 0; j < number.length; j++){
            temporary.push(number[j]);
        }
    }
    
    var count = temporary.length;
    for(let i = 0; i < count; i++)
    {
        if(temporary[i] === number){
            return temporary.indexOf(number);
        }
    }
    return 'null';
}

console.log("\nNumber 3");
console.log(searchInArray(array_of_number, 3));
console.log(searchInArray(array_of_number, 2));
console.log(searchInArray(array_of_number, 4));
console.log(searchInArray(array_of_number, 8));
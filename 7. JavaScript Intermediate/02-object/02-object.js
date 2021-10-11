//No 1
const person = {
    name: "person A",
    age: 100,
    favDrinks: [
        "coffee",
        "jamu temulawak",
        "tea"
    ],
    greeting: function() {
        console.log("hello world")
    }
}

/// EDIT HERE
person.name = "Arvel Gavrilla Raissananda";
person.favDrinks[1] = "tap water";

person.greeting = function(name) {
    return "Hello, " + name;
}
/// STOP
console.log("Number 1");
console.log(person.name);
console.log(person.age);
console.log(person.favDrinks);
console.log(person.greeting("John Watson"));

//No 2
function getObjectValue(obj, path) {
    path = path.split(".");
    for (let i = 0; i < path.length; i++) {
        let element = path[i];
        if (obj.hasOwnProperty(element)){
            obj = obj[element];
        }
        else{
            return 'null';
        }
    }
    return obj;  
}

const milkBasedCoffee = {
    name: "latte",
    ingredients: {
        espresso: {
        origin: "lampung",
        roastProfile: "medium to dark",
        ratio: 1
        },
        milk: {
        brand: "susu murni",
        isVegan: false,
        ratio: 5
        }
    },
}

const espresso = getObjectValue(milkBasedCoffee, "ingredients.espresso.origin");
const coffeeBrand = getObjectValue(milkBasedCoffee, "ingredients.espresso.brand");
const isMilkVegan = getObjectValue(milkBasedCoffee, "ingredients.milk.isVegan");

console.log("\nNumber 2");
console.log(espresso);
console.log(coffeeBrand);
console.log(isMilkVegan);

//No 3
const items = [
    {
        btc: { buy: 10, sell: 9 },
        eth: { buy: 8, sell: 7.5 },
        doge: { buy: 7, sell: 6.5 },
        day: 1,
    },

    {
        btc: { buy: 9, sell: 5 },
        eth: { buy: 7, sell: 4 },
        doge: { buy: 6, sell: 3 },
        day: 2,
    },

    {
        btc: { buy: 5, sell: 10 },
        eth: { buy: 4, sell: 6 },
        doge: { buy: 3, sell: 4 },
        day: 3,
    },
];

const calculateIncome = (items) => {
    return items.reduce((acc, curr) => {
        const btcSum = curr.btc.sell - curr.btc.buy;
        const dogeSum = curr.doge.sell - curr.doge.buy;
        const ethSum = curr.eth.sell - curr.eth.buy;
        return {
            btc: acc.btc + btcSum,
            doge: acc.doge + dogeSum,
            eth: acc.eth + ethSum,
        };
    }, 
    
    {
        btc: 0,
        doge: 0,
        eth: 0
    });
}

console.log("\nNumber 3");
console.log(calculateIncome(items));
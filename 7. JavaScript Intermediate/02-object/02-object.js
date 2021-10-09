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
console.log(isMilkVegan)
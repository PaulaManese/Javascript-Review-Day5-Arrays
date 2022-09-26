console.log("connected");

// What is an array?
//- ordered collection of values
//- ordered because of index (zero based)

/*Basic Structure*/
//element - square brackets called "Array Literals"

//How to create a JS array?

/**
 Method 1: Declaring and initialize an array
 Ex: let array = [];

 Method 2: Using the "new" keyword + Array()
 Ex: let arr = new Array();
 */

//How to access an array element?
//through array index
//index starts at zero

let months = ["Jan", "Feb", "Mar", "April", "May"];

console.log (months[0]);
console.log (months[1]);
console.log (months[2]);
console.log (months[3]);
console.log (months[4]);

//How to count elements in an array?
//using .length property

console.log (months.length); //5 - counts the number of elements

/**
Array Manipulation

How are we going to add a new element at the end of an array?

//using assignment operator (=)
//using push method
 */

//Mutator method - modifies the original array

let count = ["one", "two", "three", "four"];

//using assignment operator (=)
console.log [count[4]];
count[4] = "five";
console.log(count); //five is already added at the end of an array.

//using push method - adds an element at the end of an array

count.push("six");
console.log (count); //six is already added at the end of an array

//using a PUSH method inside the function

function addElement(element){
    count.push(element);
    console.log (count);
}

addElement("seven");

//Pop method - removes the last element.

count.pop();
console.log (count);

//using pop method into a function
function removeElement () {
    count.pop();
    console.log (count);
}
removeElement();

//How to add an element at the beginning of an array?

//1. Unshift method - adds an element at the beginning of an array

count.unshift("zero");
console.log(count);

//2. Shift method - removes the element at the beginning of an array.

count.shift();
console.log(count);

//Sort method - displays the array in an ascending order.

let nums = [15,32,61,130,230,13,34];
nums.sort();
console.log (nums);

nums.sort(
    function (a,b){
        return a-b
    }
);

console.log(nums);

//reverse method - displays the array in a descending order.

nums.reverse();
console.log(nums); //descending order

//Splice method
    //returns an array containing deleted elements
    //first parameter index where to start omitting an element
    //second parameter - number of elements to be omitted
    //third parameter - elements to be added or inserted

console.log (count);

let newSplice = count.splice(2);//delete elements
//deletes all elements from element 2
console.log (newSplice);

//Slice method
    // returns new array
    //start - removes all elements before the element specified by the index
    //slice (<start>, <end>)

let animals = ["dog", "cat", "snake", "monkey", "rat"];
console.log (animals);

let newSlice = animals.slice(2);
console.log(newSlice);
console.log(animals);

newSlice = animals.slice (1,2);
console.log(newSlice);
//deletes specified number of elements from index 1 then return the remaining elements in the new array newSlive

//concat method - merges 2 or more arrays.

console.log (animals);
console.log (count);

let newConcat = animals.concat(count);
console.log(newConcat);

//Join method - specify how it was displayed using special characters and spaces.

let meal = ["KFC Fully Loaded", "Bucket Meal", "Diet Meal"];

let newJoin = meal.join();
console.log(newJoin);

newJoin = meal.join("");
console.log (newJoin);

newJoin = meal.join("-");
console.log(newJoin);

newJoin = meal.join (" ");
console.log(newJoin);

//toString method - returns a string representing the specified array and its elements.

let elements = ["b", "a", "d", 8, 5, "e"];
console.log(elements);

console.log(typeof elements[0]);//string
console.log (typeof elements[3]); //number
console.log (typeof elements[4]); //number

let newString = elements.toString();
console.log (newString);
console.log(typeof newString); //string

//Accessor Method - returns a new value of a representation

//indexOf()
//lastIndexOf()

//indexOf - finds the index of a given element where it is "first found"

let countries = ["US", "PH", "CAN", "TAI", "PH", "SG", "HK", "PH"];

let index = countries.indexOf("PH");
console.log(index); //1

//lastIndexOf() - finds the index of a given element where it is "last found"

let lastIndex = countries.lastIndexOf("PH");
console.log(lastIndex);//7

//Iterators - defines a sequence and potentially a return value upon its termination

/*
forEach() Method - executes a provided function (anonymous function) once for each array element

syntax:
forEach(
    function() {

    }
)
*/

let bigData = [
    {fn: "Daniel", ln: "Matsunaga"},
    {fn: "Anne", ln: "Curtis"},
    {fn: "Daniel", ln: "Padilla"}
];

let result = bigData.forEach(
    function (element) {
        console.log(element);
        return element
    }
)

console.log(result); //undefined

//Q: How to create a copy of an array from the original array? map() method

//map()
//iterates each element in an array and returns a new array with same elements (or different values depending on the result of function's operation)
//does not modify the original array

let days = ["mon", "tues", "wed", "thurs", "fri", "sat", "sun"];

let mapNewDays = days.map(
    function (day){
        return day
    }
)
console.log (mapNewDays);

let newDays = [];
console.log(newDays);

days.forEach( function (day) {
    newDays.push(day);
})
console.log(newDays);

//filter
//returns an array that contains elements which passes a given condition
let digits = [1,2,3,4,5];
let newFilter = digits.filter(
    function (element){
        return element < 3
    }
)
console.log(newFilter);//1,2

//includes() - determines whether an array "includes" a certain value among its entries.
//returns true if an a string contains a "specified" string.
//otherwise, it returns false
//CASE SENSITIVE

// let pets=["hamster", "tuko", "tiger", "corgi"];

// let newIncludes = pets.includes("tuko");
// console.log(newIncludes);//true

let pets = ["dogs", "cats", "birds", "fishes"];

let newIncludes= pets.includes("cats");
console.log(newIncludes);


function checkTheWord(word){
    if (pets.includes(word) == true) {
        return `${word} found`
    } else {
        return `${word} not found`
    }
}

console.log(checkTheWord("hamster"));
console.log (checkTheWord("dogs"));


/-----/**
// What is an array?
//- ordered collection of values
//- ordered because of index (zero based)

/*Basic Structure*/
//element - square brackets called "Array Literals"

//How to create a JS array?

/**
 Method 1: Declaring and initialize an array
 Ex: let array = [];

 Method 2: Using the "new" keyword + Array()
 Ex: let arr = new Array();
 */

//How to access an array element?
//through array index
//index starts at zero

let months = ["Jan", "Feb", "Mar", "April", "May"];

console.log (months[0]);
console.log (months[1]);
console.log (months[2]);
console.log (months[3]);
console.log (months[4]);

//How to count elements in an array?
//using .length property

console.log (months.length); //5 - counts the number of elements

/**
Array Manipulation

How are we going to add a new element at the end of an array?

//using assignment operator (=)
//using push method
 */

//Mutator method - modifies the original array

let count = ["one", "two", "three", "four"];

//using assignment operator (=)
console.log [count[4]];
count[4] = "five";
console.log(count); //five is already added at the end of an array.

//using push method - adds an element at the end of an array

count.push("six");
console.log (count); //six is already added at the end of an array

//using a PUSH method inside the function

function addElement(element){
    count.push(element);
    console.log (count);
}

addElement("seven");

//Pop method - removes the last element.

count.pop();
console.log (count);

//using pop method into a function
function removeElement () {
    count.pop();
    console.log (count);
}
removeElement();

//How to add an element at the beginning of an array?

//1. Unshift method - adds an element at the beginning of an array

count.unshift("zero");
console.log(count);

//2. Shift method - removes the element at the beginning of an array.

count.shift();
console.log(count);

//Sort method - displays the array in an ascending order.

let nums = [15,32,61,130,230,13,34];
nums.sort();
console.log (nums);

nums.sort(
    function (a,b){
        return a-b
    }
);

console.log(nums);

//reverse method - displays the array in a descending order.

nums.reverse();
console.log(nums); //descending order

//Splice method
    //returns an array containing deleted elements
    //first parameter index where to start omitting an element
    //second parameter - number of elements to be omitted
    //third parameter - elements to be added or inserted

console.log (count);

let newSplice = count.splice(2);//delete elements
//deletes all elements from element 2
console.log (newSplice);

//Slice method
    // returns new array
    //start - removes all elements before the element specified by the index
    //slice (<start>, <end>)

let animals = ["dog", "cat", "snake", "monkey", "rat"];
console.log (animals);

let newSlice = animals.slice(2);
console.log(newSlice);
console.log(animals);

newSlice = animals.slice (1,2);
console.log(newSlice);
//deletes specified number of elements from index 1 then return the remaining elements in the new array newSlive

//concat method - merges 2 or more arrays.

console.log (animals);
console.log (count);

let newConcat = animals.concat(count);
console.log(newConcat);

//Join method - specify how it was displayed using special characters and spaces.

let meal = ["KFC Fully Loaded", "Bucket Meal", "Diet Meal"];

let newJoin = meal.join();
console.log(newJoin);

newJoin = meal.join("");
console.log (newJoin);

newJoin = meal.join("-");
console.log(newJoin);

newJoin = meal.join (" ");
console.log(newJoin);

//toString method - returns a string representing the specified array and its elements.

let elements = ["b", "a", "d", 8, 5, "e"];
console.log(elements);

console.log(typeof elements[0]);//string
console.log (typeof elements[3]); //number
console.log (typeof elements[4]); //number

let newString = elements.toString();
console.log (newString);
console.log(typeof newString); //string

//Accessor Method - returns a new value of a representation

//indexOf()
//lastIndexOf()

//indexOf - finds the index of a given element where it is "first found"

let countries = ["US", "PH", "CAN", "TAI", "PH", "SG", "HK", "PH"];

let index = countries.indexOf("PH");
console.log(index); //1

//lastIndexOf() - finds the index of a given element where it is "last found"

let lastIndex = countries.lastIndexOf("PH");
console.log(lastIndex);//7

//Iterators - defines a sequence and potentially a return value upon its termination

/*
forEach() Method - executes a provided function (anonymous function) once for each array element

syntax:
forEach(
    function() {

    }
)
*/

let bigData = [
    {fn: "Daniel", ln: "Matsunaga"},
    {fn: "Anne", ln: "Curtis"},
    {fn: "Daniel", ln: "Padilla"}
];

let result = bigData.forEach(
    function (element) {
        console.log(element);
        return element
    }
)

console.log(result); //undefined

//Q: How to create a copy of an array from the original array? map() method

//map()
//iterates each element in an array and returns a new array with same elements (or different values depending on the result of function's operation)
//does not modify the original array

let days = ["mon", "tues", "wed", "thurs", "fri", "sat", "sun"];

let mapNewDays = days.map(
    function (day){
        return day
    }
)
console.log (mapNewDays);

let newDays = [];
console.log(newDays);

days.forEach( function (day) {
    newDays.push(day);
})
console.log(newDays);

//filter
//returns an array that contains elements which passes a given condition
let digits = [1,2,3,4,5];
let newFilter = digits.filter(
    function (element){
        return element < 3
    }
)
console.log(newFilter);//1,2

//includes() - determines whether an array "includes" a certain value among its entries.
//returns true if an a string contains a "specified" string.
//otherwise, it returns false
//CASE SENSITIVE

// let pets=["hamster", "tuko", "tiger", "corgi"];

// let newIncludes = pets.includes("tuko");
// console.log(newIncludes);//true

let pets = ["dogs", "cats", "birds", "fishes"];

let newIncludes= pets.includes("cats");
console.log(newIncludes);


function checkTheWord(word){
    if (pets.includes(word) == true) {
        return `${word} found`
    } else {
        return `${word} not found`
    }
}

console.log(checkTheWord("hamster"));
console.log (checkTheWord("dogs"));

//every() - checks if "all elements" passes a given condition
console.log (digits);
//returns true if all elements passed the given condition
let newEvery = digits.every(
    function (element){
        return element > 5
    }
)
console.log(newEvery);//Primitive Data type - Boolean

//some() - checks if "at least one element" passes a given condition.
// returns true even if only some of the elements passed the given condition

let newSome = digits.some(
    function (element){
        return element > 2
    }
)

console.log(newSome); //Primitive Data type - Boolean

//reduce() - evaluates elements from left to right and returns a "single value";

let newReduce = digits.reduce(
    function (a,b){
        let total = a + b;
        return total;
    }
)

console.log(newReduce); //Primitive Data type - Number 15
//var digits = [1,2,3,4,5] = 1+2+3+4+5
console.log (newReduce / digits.length);
            //15      / 5
            //3

let numeric = [5,11,30,118,634];

//SOLUTION 1
let nums1 = numeric.reduce(
    function (a,b) {
        return a + b
    }
)

console.log(nums1);
console.log (nums1/numeric.length); //159.6

//SOLUTION 2
let total = 0;
for (let i = 0; i < numeric.length; i++)
{
    total = total + numeric [i];
}

console.log(total);
console.log(total/numeric.length); //159.6


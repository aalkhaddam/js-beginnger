// Trying to write Javascript for the first time!
console.log('Hello WOrld');

let isApproved = false;

console.log(typeof(isApproved));

//  reference types (objects, array, function)

let person = {  // curly brackets means "object literal"
    name: 'Alex',
    age: 23

};

//dot notation (changing properties)
person.name = 'Vraj';

// bracket notation - not as clean as dot notation, 
// but useful for dynamic changes
// or when you don't know what property is being changed
person['name'] = 'Emma';

console.log(person);

let selectedColours = ['red','blue'];

//function terminology
// parameter: variable in function at time of declaration
// argument: value that is supplied to that parameter

function greet(firstName, lastName){
    console.log('Hello '+ firstName + ' '+ lastName);

}

//Factory function
function createCircle(radius){
    return {
        radius, 
        draw: function(){
            console.log('draw');
        }
    }
}
const circle1 = createCircle(1);

// Constructor function - more similar classes in Java
function Circle(radius){ //naming convention for constructor func is capital letter first
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }

    let sizes = [1, 4, 6, 7, 9];

    Object.defineProperty(this, 'naturalSize', { //defineProperty to define getters or setters
        get: function(){ // "getter" is allowed 0 parameters
            //used when trying to GET something from property
            let sum = 0;
            for (let amount in sizes){
                sum = sum + sizes[amount];
            }
            return sum/sizes.length;
        },
        set: function(size){  //when something is being SET to this property
            if(typeof size !== 'number'){
                throw new Error('You done fucked up'); // built in constructor
                // used to create error objects - hence the "new"
            }
            //can't change the value of the "getter" in the setter
        }
    })
}
const circle2 = new Circle(1) // need to use "new" with constructors
// "new" will stop "this" from calling on a more (or "the") global object 

//Remember that objects are copied by their reference

console.log();
console.log(circle2);
console.log();

circle2.naturalSize = 6

console.log();
console.log(circle2.naturalSize);
console.log();

let testObj = {number: 10}; // property needs a name, or else error
testObj.number++;

testObj.colour = 'purple'; //dot notation can add properties
testObj.cost = {cad : 20, usd : 14};

const bottle = 'green bottle';
testObj[bottle] = {water : 'empty'}; //good for weird property names
// no dot with square brackets

delete testObj[bottle]; // use quotes in square when naming property

// using for loop when indexing object will cycle its properties
// using it's length as total

for (let index in testObj){
    console.log(index, testObj[index]); //index will name property
    //testObj[index] will call value of propety
}

//Object.keys("object-name") will return all 'keys' of object in array

if('number' in testObj){
    console.log('Object has a number');
}

/* You can pull data from object if the variable 
is the same as the name of a property */

const {number} = testObj; //saves the testObj.number in 
// a const called number.. - called desctructuring

//Shorthand property
//can input a variable into an object quickly 
//if the supposed object property will have the same 
//name as the variable

let introPhrase = 'Hi, how are you';
testObj = {introPhrase};
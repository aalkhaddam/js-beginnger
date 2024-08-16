let pressed = false;
let messageTimer;

function display(){
  if(!pressed){
    document.querySelector('.js-confirmation').innerText = 'Added';
    messageTimer = setTimeout(function(){
      document.querySelector('.js-confirmation').innerText = '';
    }, 2000);
    pressed = !pressed; // button pressed
  }else{
    clearTimeout(messageTimer);
    pressed = !pressed; //unpressing button to be repressed
    display();
  }
  //return;
}

document.querySelector('.js-add-cart')
  .addEventListener('click', () => {
    display();
  });


/*
Cannot use arrow functions when you think you will be 
"hoisting" or calling the function before it's created 
*/

let arrayTest = ['a', 'b', 'c', 'd', 'e'];

arrayTest.forEach((value, index) => { //recommended to use arrow func
  if(value === 'b' || value === 'd'){
    console.log(index);
  }else{
    console.log(value);
  }
});
//use arrow functions when passing a function into another function

const arrowFunc = (params, param2) => {
  //this is the syntax for "superior" arrow funcs
};

const arrowFunc2 = singleParam => {
  //arrow func with 1 param does not require brackets
};

const arrowFunc3 = singleParam2 => true; 
  //arrow func with 1 line of code inside can omit curly brackets and return
  // They are then allowed to be 1 line

const obj1 = {
  method: () => {
    //passing arrow func into object
  },
  method2() {
    //shorthand for method in object: Recommended
  }
};

const testButton = document.querySelector('.js-test-button');
testButton.addEventListener('click', () => {
  console.log('you clicked the button!');
});
//addEventListener(event, function); is the syntax
//replaces the "onclick" or "onkeydown" thing
//can also removeEventListener from elements
//same parameters, but try to pass var names when writing
/*
IMPORTANT
  You can't just pass functions into ---EventListener methods
  because it will try to grab the return value of that function.
  If your function doesn't have one, it will return undefined.
  Running a function that does steps, but no return, can be done
  using arrow functions in "add" or "remove" EventListener
  e.g.:

  document.querySelector('.js-rock-button')
    .addEventListener('click', () => {
      player('rock');
    });

*/

/*
addEventListener events are sent through as a parameter in the function parameter
e.g. (on press of 'r' key, play rock):

document.body.addEventListener('keydown', (event) => {
  keyPress = event.key;
  if(keyPress === 'r'){
    player('rock');
  }
});

*/

/*
<html>.querySelectorAll();
Returns an array of all elements with the selected criteria. 
Can use forEach() method to loop through them. 
*/

/* 
  array.filter((value, index) => {
    return boolean;
  });

  filter() creates a new array, adding [value] to that new array 
  if "return" is true. return value can also be "truthy" or "falsy" 
  (i.e., return value>=0; will only add values that satisfy this logic.
  the truthy value here is true. if value was "null", for example, it would 
  return false)
*/

/* 
  array.map((value, index) => {
    return value;
  });

  map() creates a new array by modifying every value at the return. For example, 
  if you did "return 10;" every value in the array would be '10'. If you did 
  "return value * 2;" then every value in the array would be multiplied by 2. 
*/

document.body.addEventListener('keydown', (evt) => {
  console.log(evt.key);
});
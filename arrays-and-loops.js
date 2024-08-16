let todoList = [];
let todoHTML = '';
let todoHold = ``;
let deleteButton = ``;
let todoObj = {
	name:'',
	date:''
}

function pressEnter(event){
	if(event.key === 'Enter'){
		addToDo();
	}
}

function addToDo(){
	todoObj.name = document.querySelector('.js-todo-input').value;
	todoObj.date = document.querySelector('.js-todo-date').value;
	todoList.push(todoObj);
	todoObj = {
		name:'',
		date:''
	}
	/* Shorthand property syntax
	since the name of the var and name of property are same
	let name = document...
	let date = document...
	
	todoList.push({
		name,
		date
	})
	the name and date will automatically integrate
	*/
	displaytodo();
}

function displaytodo(){
	document.querySelector('.js-full-list').innerHTML = '';
	document.querySelector('.js-todo-input').value = '';
	document.querySelector('.js-todo-date').value = '';
	//could use "destructuring" for object in array
	//const {name, date} = todoList[i];
	//~~pulls out the obj with property "name" into a var with same label~~
	//++ it cane be done with multiple var names
	//destructuring can also be applied to arrays
	// const [first, ,third] = [1,2,3] - saves as you think
	//remember, arrays are reference types so 
	/* 
	array1 = ...
	array2 = array1
	-both point to the same place, BUT if you want a copy, use .slice()
	array2 = array1.slice() <- creates separate places to reference
	*/

	todoList.forEach(function(value, index){
		todoHTML += 
		`<div>${value.name}</div>
		<div>${value.date}</div>    
		<button 
		class="delete-button" 
		onclick = "todoDelete(${index});">Delete</button>`
	});
/* 
	Note: if you generate HTML in code, and want to add an event listener
	to an event from generated html, it needs to underneath generated
	html code in js  
*/

	/*for(let i = 0; i<todoList.length; i++){
		todoHTML += 
		`<div>${todoList[i].name}</div>
		<div>${todoList[i].date}</div>    
		<button class="delete-button" onclick = "todoDelete(${i});">Delete</button>`; 
		/*put button in para to be on same line - initial format
		div dont have default styling apparently
		^useful for putting thing into grid
		break; - jumps out of block
		continue; -in loops, will skip the rest of code in iteration 
		and jump back to top 
		//forEach() is recommended when looping through arrays
		//forEach(function(currentValue, index){}) syntax
		//there is more syntax, but that's what needed now
	}*/
	document.querySelector('.js-full-list').innerHTML = todoHTML; //use div
	todoHTML = ''; 
}

function todoDelete(itemNum){
	// while get element id == true, remove 
	/*todoClass = '.js-item'+itemNum
	while (document.querySelector(todoClass) == true) {
		document.querySelector(todoClass).remove();
	}*/
	//Why not just remove from array
	todoList.splice(itemNum, 1);
	displaytodo();
}

//let toDoIndex = 0;

/*function addToDo(){
	todoList.push(document.querySelector('.js-todo-input').value);
	console.log(todoList);
	document.querySelector('.js-todo-input').value = ''; // this works
	let newItem = document.createElement('p');
	newItem.innerText = todoList[todoIndex];
	document.querySelector('.js-full-list').append(newItem);
	todoIndex++; 
} */
// because he hadn't shown .append() yet, 
// he wrote "html" in a string, and then
// used that


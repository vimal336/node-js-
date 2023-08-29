// Save a reference to this Because it Changes Based on Context
// If you have a background with Java, ActionScript, PHP, or basically any language that uses the this keyword you might think you understand how JavaScript treats the same keyword. Unfortunately you would be wrong.

// Let me tell you how this is determined officially by ECMAScript.

// The this keyword evaluates to the value of the ThisBinding of the current execution context.

//Basically that means that the value of the this variable is determined based on context, not encapsulation, as it is in other languages.

//For example, if this is used inside a function, this references the object that invoked the function. That means that if you create a constructor function (basically a class in JavaScript) which then has methods attached to it, 

// the this variable in those methods may not refer to the constructor function (class) they are inside of.

//The above happens a lot in Node, but it might be hard to understand without seeing code.

//In the code below this has two different values.

function MyClass() {
	this.myMethod = function() {
		console.log(this);
	};
}


var myClass = new MyClass();
myClass.myMethod(); // this resolves as the instance of MyClass


var someFunction = myClass.myMethod;
someFunction(); // this resolves as the window in a browser and the global object in Node

//The best way to solve this is to preserve this as another variable and then use that other variable instead. 


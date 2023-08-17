Callbacks Always Pass Error Parameter First
Node.js is asynchronous, which means you usually have to use callback functions to determine when your code completes.

After writing Node.js code for a while you will want to start writing your own modules, which need callback functions to be passed in by the user of your module. If an error occurs in your module, how do you communicate that to the user of the module? If you're a Java developer you might think you should throw an exception, but throwing an exception in Node.js could potentially shutdown the server. Instead you should package the error into an object, and pass it to the callback function as the first parameter. If no error occurred you should pass null.

By convention all callback functions are passed an error as the first parameter.

function myFunction(someArray, callback){

	// an example of an error that could occur
	// if the passed in object is
	
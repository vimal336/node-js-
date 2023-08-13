//Always Use Asynchronous Methods

//The two most powerful aspect of Node.js are it's non-blocking IO and asynchronous runtime. Both of these aspects of Node.js are what give it the speed and robustness to serve more requests faster than other languages.

//In order to take advantage of these features you have to always use asynchronous methods in your code. Below is an example showing the good and bad way to read files from a system.


//The Bad Way reads a file from disk synchronously.

var data = fs.readFileSync('/path/to/file');
console.log(data);



// use the data from the file
//The Good Way reads a file from disk asynchronously.

fs.readFile('/path/to/file', function (err, data) {
	// err will be an error object if an error occurred
	// data will be the file that was read
	console.log(data);
});


//When a synchronous function is invoked the entire runtime halts. For example, above The Bad Way halts the execution of any other code that could be running while the file is read into memory. This means no users get served during this time. If your file takes five minutes to read into memory no users get served for five minutes.

//By contrast The Good Way reads the file into memory without halting the runtime by using an asynchronous method. This means that if your file takes five minutes to read into memory all your users continue to get served.
//Never require Modules After App Initialization

// As stated above you should always use asynchronous methods and function calls in Node. The one exception is the require function, which imports external modules.

// Node.js always runs require synchronously. This is so the module being required can require other needed modules. The Node.js developers realize that importing modules is an expensive process and so they intend for it to happen only once, when you start your Node.js application. They even cache the required modules so they won't be required again.

// To explain one of the problems imagine you had a module that took 30 minutes to load, which is unreasonable, but just imagine. If that module is only needed in one route handler function it might take some time before someone triggers that route and Node.js has to require that module. When this happens the server would effectively be inaccessible for 30 minutes as that module is loaded. If this happens at peak hours several users would be unable to get any access to your server and requests will queue up.

// The second problem is a bigger problem but builds on the first. If the module you require causes an error and crashes the server you may not know about the error for several days, especially if you use this module in a rarely used route handler. No one wants a call from a client at 4AM telling them the server is down.

// The solution to both of these problems is to always require modules at application startup rather than during execution of a function during runtime. Node.js will cache loaded modules within the variable you specify allowing for faster code execution during runtime instead of blocking during runtime and causing potential issues.

//The Bad Way


app.get('/',function(req,res,next){

	var _ = require('underscore');

	// sort data within the request body
	_.sort(someArray,function(item){
		// do something with the item
	});
});


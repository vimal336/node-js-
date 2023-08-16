// Use Exception Handling When Errors Can Be Thrown

// Most methods in Node.js will follow the "error first" convention, but some functions don't. 
// These functions are not Node.js specific function, 
// they instead come from JavaScript. 
// There are lots of functions that can cause exceptions. 
// One of these functions is JSON.parse which throws an error if it can't parse a string into JSON.

// How do we detect this error without crashing our server?

// This is a perfect time to use a classic JavaScript try catch.

var parsedJSON;

try {
	parsedJSON = JSON.parse('some invalid JSON');
} catch (err) {
	// do something with your error
}

if (parsedJSON) {
	// use parsedJSON
}
// You can now be sure that the JSON was parsed correctly before using it.

// This can be even more useful when using it in modules.

function parseJSON(stringToParse, callback) {

	callback = (typeof callback === 'function') ? callback : function() {};

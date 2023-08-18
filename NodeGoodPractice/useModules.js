Use module.exports not exports

You might have used module.exports and exports interchangeably thinking they are the same thing and in many cases they are. However, exports is more of a helper method that collects properties and attaches them to module.exports.

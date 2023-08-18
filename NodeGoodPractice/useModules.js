Use module.exports not exports

You might have used module.exports and exports interchangeably thinking they are the same thing and in many cases they are. However, exports is more of a helper method that collects properties and attaches them to module.exports.

So what's the problem? That sounds great.

Well don't get too excited. exports only collects properties and attaches them if module.exports doesn't already have existing properties. If module.exports has any properties, everything attached to exports is ignored and not attached to module.exports.

module.exports = {};

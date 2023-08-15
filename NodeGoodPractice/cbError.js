// Always Check for "error" in Callbacks
// As stated above, by convention an error is always the first parameter passed to any callback function. This is great for making sure your site doesn't crash and that you can detect errors when they happen.

// Now that you know what they are you should start using them. If your database query errors out you need to check for that before using the results. I'll give you an example.

myAsyncFunction({
    some: 'data'
}, function(err, someReturnedData) {

    if(err){
        // don't use someReturnedData
        // it's not populated
        return;
    }


const path = require('path');
// Base file name
console.log(path.basename_filename);

//Directory name
console.log(path.dirname(_filename));

//File extension
console.log(path.extension(_filename));

// Create path object
console.log(path.parse(_filename));

// Concatenate paths
console.log(path.join(_dirname, 'test', 'hello.html'));

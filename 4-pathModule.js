// importing globals, path module
const path = require('path');

//join
const filePath = path.join('/content', 'pathModule.txt');
const baseName = path.basename(filePath);
const absolute = path.resolve(__dirname, 'content', 'pathModule.txt');

console.log(filePath, baseName, absolute);
module.exports = absolute;

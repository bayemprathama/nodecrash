// importing globals, readFileSync and writeFileSync from fs (filesystem module)
const { readFileSync, writeFileSync } = require('fs');
// importing absolute path file from the previous file
const pathName = require('./4-pathModule');

//reading text (path, encoding)
const readText = readFileSync(pathName, 'utf8');

//create/write new file, (path with new file name, data)
writeFileSync(
  './content/thisIsFromFsModule.txt',
  'this is just dummy text you dumb'
);

//appending new data to existing file (path, data, {flag})
writeFileSync(
  './content/thisIsFromFsModule.txt',
  'ohh hello there, i am new here',
  { flag: 'a' }
);
const readText2 = readFileSync('./content/thisIsFromFsModule.txt', 'utf8');
console.log(readText2);

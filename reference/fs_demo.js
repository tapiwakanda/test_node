const fs = require('fs');
const path = require('path');

// create a folder
/* fs.mkdir(path.join(__dirname, '/test'), {}, err => {
    if(err) throw err;
    console.log('Folder Created');
}); */

// Create a file and write to it
/* fs.writeFile(path.join(__dirname, '/test', 'hello.text'), 'Hello world from quarantine', err => {
    if(err) throw err;
    console.log('File written to...');

    //File Append
    fs.appendFile(path.join(__dirname, '/test', 'hello.text'), 'Corona Virus Is Coming', err => {
        if(err) throw err;
        console.log('File written to...');
    });
}); */

//read file
fs.readFile(path.join(__dirname, '/test', 'hello.text'), 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data);
}); 
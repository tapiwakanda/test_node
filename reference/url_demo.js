const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

console.log(myUrl.href);

//to string
console.log(myUrl.toString());

// root domain
console.log(myUrl.host);

const Password = require('./index');
const password = new Password(12, true, true, true);
let pass = password.random();
console.log(pass);
pass = password.random();
console.log(pass)
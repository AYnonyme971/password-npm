const Password = require('../src/index');
const passwird = new Password(15, true, true, true, true);

console.log(passwird.random())
# password-npm

## [Changelogs](./CHANGELOG.md)

(Don't use ver 1.0.3)

## How to use it/Comment l'utiliser
First, you have to install it : `npm install password-npm`/Premièrement, vous devez l'installer : `npm install password-npm`
## Examples
### In English
First you have to define it
```js
const Password = require('password-npm');
const password = new Password();
```
You need to put a number at first, it will be the longer of the password
```js
const Password = require('password-npm');
const password = new Password(12); // Example
```
After, you have three parameters : lowercases: boolean, uppercases: boolean, and specialCharaters: boolean (just put true/false)
```js
const Password = require('password-npm');
const password = new Password(12, true, true, true); // The most secured password
```
And then you can either console.log it : 
```js
const Password = require('password-npm');
const password = new Password(12, true, true, true);
console.log(password.random()) // The function that makes the password
```
Or store it:
```js
const Password = require('password-npm');
const password = new Password(12, true, true, true);
const myPassword = password.random();
```
Or you can just set the initial variable directly to the random function (I recommand to do the second thing, because you can use it several times, only with one variable with Password)
```js
const Password = require('password-npm');
const password = new Password(12, true, true, true).random();
```
### En français
Premièrement, il faut le définir :
```js
const Password = require('password-npm');
const password = new Password();
```
Tu dois mettre un nombre, pour définir la longueur du mot de passe
```js
const Password = require('password-npm');
const password = new Password(12); // Example
```
Après, tu as trois paramètres : lowercases: boolean, uppercases: boolean, and specialCharaters: boolean (mets juste true/false)
```js
const Password = require('password-npm');
const password = new Password(12, true, true, true); // Mot de passe le plus sécurisé
```
Et après tu peux soit le log dans la console : 
```js
const Password = require('password-npm');
const password = new Password(12, true, true, true);
console.log(password.random()) // La fonction qui créé le mot de passe
```
Soit le stocket dans un variable :
```js
const Password = require('password-npm');
const password = new Password(12, true, true, true);
const myPassword = password.random();
```
Ou tu peux définir la variable initiale avec la fonction random (Je recommande de faire la seconde option, car tu peux utiliser plusieurs fois password)
```js
const Password = require('password-npm');
const password = new Password(12, true, true, true).random();
```

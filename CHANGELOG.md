## 1.1.0 :

### English :

Added number, and the inisilization have changed :

Before :
```js
const Password = require('password-npm');
const password = new Password(longer: number, lowercases: boolean, uppercases: boolean, specials: boolean) // Most secured password (don't put lowercases: boolean, or longer: number, but for the booleans true or false, and the number a number)
```
After :
```js
const Password = require('password-npm');
const password = new Password(longer: number, lowercases: boolean, uppercases: boolean, numbers, specials: boolean) // Most secured password (don't put lowercases: boolean, or longer: number, but for the booleans true or false, and the number a number)
```

### En français :

Ajout des nombres, et l'initilasation a changé :

Avant :
```js
const Password = require('password-npm');
const password = new Password(longer: number, lowercases: boolean, uppercases: boolean, specials: boolean) // Mot de passe le plus sécurisé (ne mettez pas lowercases: boolean, or longer: number, mais pour les booleans true ou false, et pour le number un nombre)
```

Après :
```js
const Password = require('password-npm');
const password = new Password(longer: number, lowercases: boolean, uppercases: boolean, numbers: boolean, specials: boolean) // Mot de passe le plus sécurisé (ne mettez pas lowercases: boolean, or longer: number, mais pour les booleans true ou false, et pour le number un nombre)
```

`Happy Coding!`

`Bon développement !`
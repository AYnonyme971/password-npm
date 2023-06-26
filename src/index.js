const chooseOne = require("../core/chooseOne");
const pickOneRandom = require("../core/pickOneRandom");
const randomIndex = require("../core/randomIndex");

class PasswordGen {
    author = "AYnonyme"
    constructor(longer, lowercases = true, uppercases = true, numbers = true, specialCharacters = false) {
        if (typeof longer !== "number" || !longer) {
            console.error(`The longer must be a number, recevied ${longer}!`)
            process.exit(0);
        } else {
            this.longer = longer
        }
        if (typeof lowercases !== 'boolean') {
            console.error(`lowercases parameter must be a boolean: false/true, recevied ${lowercases}`)
            process.exit(0)
        } else {
            this.lowercases = lowercases
        }
        if (typeof uppercases !== 'boolean') {
            console.error(`uppercases parameter must be a boolean: false/true, recevied ${uppercases}`)
            process.exit(0)
        } else {
            this.uppercases = uppercases
        }
        if (typeof specialCharacters !== 'boolean') {
            console.error(`specialCharacters parameter must be a boolean: false/true, recevied ${specialCharacters}`)
            process.exit(0)
        } else {
            this.specialCharacters = specialCharacters
        }
        if (typeof numbers !== 'boolean') {
            console.error(`numbers parameter must be a boolean: false/true, recevied ${specialCharacters}`)
            process.exit(0)
        } else {
            this.numbers = numbers
        }
    }
    random() {
        const longer = this.longer,
            lowercases = this.lowercases,
            uppercases = this.uppercases,
            special = this.specialCharacters,
            number = this.numbers;

        let lowerCases = "abcdefghijklmnopqrstuvwxyz",
            upperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            specials = "&é\"#'{([-|è`_\\ç^à@)]°+=}¨$£¤ù%*µ?,.;/:!§<>",
            numbers = "0123456789",
            result = "";
        for (let i = 0; i < longer; i++) {
            // uppercases, special
            if (!lowercases && uppercases && special && !number) {
                let number = pickOneRandom(false, true, true, false);
                let choosen = chooseOne(number);
                if (choosen == "uppercase") {
                    result += upperCases.charAt(randomIndex(upperCases));
                }
                else if (choosen == "special") {
                    result += specials.charAt(randomIndex(specials))
                }
            }
            // lowercases, uppercases, specials
            else if (lowercases && uppercases && special && !number) {
                let number = pickOneRandom();
                let choosen = chooseOne(number);
                if (choosen == "lowercase") {
                    result += lowerCases.charAt(randomIndex(lowerCases));
                }
                else if (choosen == 'uppercase') {
                    result += upperCases.charAt(randomIndex(upperCases));
                }
                else if (choosen == "special") {
                    result += specials.charAt(randomIndex(specials));
                }

            }
            // lowercases, special
            else if (lowercases && !uppercases && special && !number) {
                let number = pickOneRandom(true, false, true, false);
                let choosen = chooseOne(number);
                if (choosen == 'lowercase') {
                    result += lowerCases.charAt(randomIndex(lowerCases));
                }
                else if (choosen == "special") {
                    result += specials.charAt(randomIndex(specials));
                }
            }
            // lowercases, uppercases
            else if (lowercases && uppercases && !special && !number) {
                let number = pickOneRandom(true, true, false, false),
                    choosen = chooseOne(number);
                if (choosen == 'lowercase') {
                    result += lowerCases.charAt(randomIndex(lowerCases));
                }
                else if (choosen == 'uppercase') {
                    result += upperCases.charAt(randomIndex(upperCases));
                }
            }
            // special
            else if (!lowercases && !uppercases && special && !number) {
                result += specials.charAt(randomIndex(specials));
            }
            // lowercases
            else if (lowercases && !uppercases && !special && !number) {
                result += lowerCases.charAt(randomIndex(lowerCases))
            }
            // uppercases
            else if (!lowercases && uppercases && !special && !number) {
                result += upperCases.charAt(randomIndex(upperCases));
            }
            //lowercases, uppercases
            else if (lowercases && uppercases && !special && !number) {
                let number = pickOneRandom(true, true, false, false),
                    choosen = chooseOne(number);
                if (choosen == "lowercase") {
                    result += lowerCases.charAt(randomIndex(lowerCases));
                }
                else if (choosen == 'uppercase') {
                    result += upperCases
                }
            }
            // uppercases, specials, numbers
            else if (!lowercases && uppercases && special && number) {
                let number = pickOneRandom(false, true, true, true),
                    choosen = chooseOne(number);
                if (choosen == 'uppercase') {
                    result += upperCases.charAt(randomIndex(upperCases));
                }
                else if (choosen == 'special') {
                    result += specials.charAt(randomIndex(specials));
                }
                else if (choosen == 'number') {
                    result += numbers.charAt(randomIndex(numbers))
                }
            }
            // specials, numbers
            else if (!lowercases && !uppercases && special && number) {
                let number = pickOneRandom(false, false, true, true),
                    choosen = chooseOne(number);
                if (choosen == "special") {
                    result += specials.charAt(randomIndex(specials));
                }
                else if (choosen == 'number') {
                    result += numbers.charAt(randomIndex(numbers));
                }
            }
            // lowercases, numbers
            else if (lowercases && !uppercases && !special && number) {
                let real = pickOneRandom(true, false, false, true),
                    choosen = chooseOne(real);
                if (choosen == 'lowercase') {
                    result += lowerCases.charAt(randomIndex(lowerCases));
                }
                else if (choosen == "number") {
                    result += numbers.charAt(randomIndex(numbers));
                }
            }
            // lowercases, specials
            else if (lowercases && !uppercases && special && !number) {
                let number = pickOneRandom(true, false, true, false),
                    choosen = chooseOne(number);
                if (choosen == "lowercase") {
                    result += lowerCases.charAt(randomIndex(lowerCases))
                }
                else if (choosen == "special") {
                    result += specials.charAt(randomIndex(specials));
                }
            }
            // lowercases, numbers
            else if (lowercases && !uppercases && !special && numbers) {
                let real = pickOneRandom(true, false, false, true),
                    choosen = chooseOne(real);
                if (choosen == 'lowercase') {
                    result += lowerCases.charAt(randomIndex(lowerCases));
                }
                else if (choosen == 'number') {
                    result += numbers.charAt(randomIndex(numbers))
                }
            }
            // lowercases, uppercases
            else if (lowercases && uppercases && !special && !number) {
                let number = pickOneRandom(true, true, false, false),
                    choosen = chooseOne(number);
                if (choosen == 'lowercase') {
                    result += lowerCases.charAt(randomIndex(lowerCases));
                }
                else if (choosen == 'uppercase') {
                    result += upperCases.charAt(randomIndex(upperCases));
                }
            }
            // uppercases, specials
            else if (!lowercases && uppercases && !special && number) {
                let real = pickOneRandom(false, true, false, true),
                    choosen = chooseOne(real);
                if (choosen == 'uppercase') {
                    result += upperCases.charAt(randomIndex(upperCases));
                }
                else if (choosen == 'number') {
                    result += numbers.charAt(randomIndex(numbers));
                }
            }
            else if (lowercases && uppercases && number && !special) {
                let real = pickOneRandom(true, true, false, true),
                choosen = chooseOne(real);
                if(choosen == 'number') result += numbers.charAt(randomIndex(numbers));
                else if (choosen == 'lowercase') result += lowerCases.charAt(randomIndex(lowerCases));
                else if (choosen == 'uppercase') result += upperCases.charAt(randomIndex(upperCases))
            }
            else if (lowercases && uppercases && number && special) {
                let real = pickOneRandom(true, true, true, true),
                choosen = chooseOne(real);
                if(choosen == 'lowercase') result += lowerCases.charAt(randomIndex(lowerCases));
                else if (choosen == 'uppercase') result += upperCases.charAt(randomIndex(upperCases));
                else if (choosen == 'number') result += numbers.charAt(randomIndex(numbers));
                else if (choosen == 'special') result += specials.charAt(randomIndex(specials));
            }
            else if (!lowercases && !uppercases && !special && !number) {
                console.error(`You must be choose at least on parameter on true, recevied ${lowercases}, ${uppercases} & ${special} on values lowercase, uppercase & specialCharacters`)
                process.exit(0);
            }
        }
        return result;
    }
}

module.exports = PasswordGen;
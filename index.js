const chooseOne = require("./utils/chooseOne");
const pickOneRandom = require("./utils/pickOneRandom");
const randomIndex = require("./utils/randomIndex");

class PasswordGen {
    lowercases;
    uppercases;
    specialCharacters;
    longer;
    constructor(longer, lowercases = true, uppercases = false, specialCharacters = false) {
        if(typeof longer !== "number" || !longer ) {
            console.error(`The longer must be a number, recevied ${longer}!`)
            process.exit(0);
        } else {
            this.longer = longer
        }
        if(typeof lowercases !== 'boolean') {
            console.error(`lowercases parameter must be a boolean: false/true, recevied ${lowercases}`)
            process.exit(0)
        } else {
            this.lowercases = lowercases
        }
        if(typeof uppercases !== 'boolean') {
            console.error(`uppercases parameter must be a boolean: false/true, recevied ${uppercases}`)
            process.exit(0)
        } else {
            this.uppercases = uppercases
        }
        if(typeof specialCharacters !== 'boolean') {
            console.error(`specialCharacters parameter must be a boolean: false/true, recevied ${specialCharacters}`)
            process.exit(0)
        } else {
            this.specialCharacters = specialCharacters
        }
    }
    random() {
        const longer = this.longer,
        lowercases = this.lowercases,
        uppercases = this.uppercases,
        specialCharacters = this.specialCharacters;

        let lowerCases = "abcdefghijklmnopqrstuvwxyz",
        upperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        specialcharacters = "&é\"#'{([-|è`_\\ç^à@)]°+=}¨$£¤ù%*µ?,.;/:!§<>",
        result = "";
        for(let i = 0; i < longer; i++) {
            
                    if(!lowercases && uppercases && specialCharacters) {
                        let number = pickOneRandom(false, true, true);
                        let choosen = chooseOne(number);
                        if(choosen == "uppercase") {
                            result += upperCases.charAt(randomIndex(upperCases));
                        }
                        else if(choosen == "special") {
                            result += specialcharacters.charAt(randomIndex(specialcharacters))
                        }
                    }
                    else if(lowercases && uppercases && specialCharacters) {
                        let number = pickOneRandom();
                        let choosen = chooseOne(number);
                        if(choosen == "lowercase") {
                            result += lowerCases.charAt(randomIndex(lowerCases));
                        }
                        else if(choosen == 'uppercase') {
                            result += upperCases.charAt(randomIndex(upperCases));
                        }
                        else if(choosen == "special") {
                            result += specialcharacters.charAt(randomIndex(specialcharacters));
                        }
                        
                    }
                    else if(lowercases && !uppercases && specialCharacters) {
                        let number = pickOneRandom(true, false, true);
                        let choosen = chooseOne(number);
                        if(choosen == 'lowercase') {
                            result += lowerCases.charAt(randomIndex(lowerCases));
                        }
                        else if(choosen == "special") {
                            result += specialcharacters.charAt(randomIndex(specialcharacters));
                        }
                    }
                    else if(lowercases && uppercases && !specialCharacters) {
                        let number = pickOneRandom(true, true, false),
                        choosen = chooseOne(number);
                        if(choosen == 'lowercase') {
                            result += lowerCases.charAt(randomIndex(lowerCases));
                        }
                        else if(choosen == 'uppercase') {
                            result += upperCases.charAt(randomIndex(upperCases));
                        }
                    }
                    else if(!lowercases && !uppercases && specialCharacters) {
                        result += specialcharacters.charAt(randomIndex(specialcharacters));
                    }
                    else if(lowercases && !uppercases && !specialCharacters) {
                        result += lowerCases.charAt(randomIndex(lowerCases))
                    }
                    else if(!lowercases && uppercases && !specialCharacters) {
                        result += upperCases.charAt(randomIndex(upperCases));
                    }
                    else if(!lowercases && !uppercases && ! specialCharacters) {
                        console.error(`You must be choose at least on parameter on true, recevied ${lowercases}, ${uppercases} & ${specialCharacters} on values lowercase, uppercase & specialCharacters`)
                        process.exit(0);
                    }
                }
            return result;
    }
}

module.exports = PasswordGen;
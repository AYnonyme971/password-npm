const pickOneRandom = (lowercase, uppercase, special) => {
    if(!lowercase && uppercase && special ) return Math.floor(Math.random() * 2 + 1);
    else if(lowercase && !uppercase && special) {
        let number = Math.floor(Math.random() * 2);
        if(number == 1) {
            let plusOrMinus = Math.floor(Math.random() * 2)
            if(plusOrMinus == 0) {
                number++;
            } else {
                number--;
            }
            return number;
        } else {
            return number;
        }
    } 
    else if(lowercase && uppercase && !special) return Math.floor(Math.random() * 2);
    else {
        let number = Math.floor(Math.random() * 3);
        return number;
    }
}
module.exports = pickOneRandom;
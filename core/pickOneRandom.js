const pickOneRandom = (lowercase, uppercase, special, numbers) => {
    if (!lowercase && uppercase && special && !numbers) {
        let number = Math.floor(Math.random() * 2 + 1);
        return number
    }
    else if (lowercase && !uppercase && special && !numbers) {
        let number = Math.floor(Math.random() * 2);
        if (number == 1) {
            let plusOrMinus = Math.floor(Math.random() * 2)
            if (plusOrMinus == 0) {
                number++;
            } else {
                number--;
            }
            return number;
        } else {
            return number;
        }
    }
    else if (lowercase && uppercase && !special && !numbers) return Math.floor(Math.random() * 2);
    else if (lowercase && !uppercase && special && number) {
        let number = Math.floor(Math.random() * 3);
        if (number = 1) {
            let plusOrMinus = Math.floor(Math.random() * 3)
            if (plusOrMinus == 0) {
                number++;
            }
            else if (plusOrMinus == 1) {
                number--;
            }
            else {
                number += 2;
            }
            return number;
        }
        else {
            return number;
        }
    }
    else if (!lowercase && uppercase && special && numbers) {
        let number = Math.floor(Math.random() * 3 + 1);
        return number;
    }
    else if (!lowercase && !uppercase && special && numbers) {
        let number = Math.floor(Math.random() * 2 + 2)
        return number;
    }
    else if (lowercase && uppercase && !special && numbers) {
        let number = Math.floor(Math.random() * 3);
        if (number == 2) {
            number++;
        }
        return number;
    }
    else if (!lowercase && uppercase && !special && numbers) {
        let number = Math.floor(Math.random() * 2 + 1);
        if (number == 0) {
            number++;
        }
        else if (number == 2) {
            let plusOrMinus = Math.floor(Math.random() * 2);
            plusOrMinus == 0 ? number++ : number--;
        }
        return number;
    }
    else if (lowercase && !uppercase && !special && numbers) {
        let number = Math.floor(Math.random() * 4);
        if (number == 1) {
            let plusOrMinus = Math.floor(Math.random() * 2);
            plusOrMinus == 0 ? number += 2 : number--;
        }
        else if (number == 2) {
            let plusOrMinus = Math.floor(Math.random() * 2);
            plusOrMinus == 0 ? number++ : number -= 2;
        }
        return number;
    }
    else {
        let number = Math.floor(Math.random() * 4);
        return number;
    }
}
module.exports = pickOneRandom;
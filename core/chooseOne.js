module.exports = function chooseOne(number) {
    let result;
    if (number == 0) {
        result = "lowercase";
        return result;
    }
    else if (number == 1) {
        result = "uppercase";
        return result;
    }
    else if (number == 2) {
        result = "special";
        return result;
    }
    else {
        result = "number";
        return result;
    }
}
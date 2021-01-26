// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let negative = false;
    let number = n;
    if (n < 0){
        negative = true;
        number = Math.abs(n);
    }
    let reversed = number.toString().split("").reverse().join('');
    reversed = +reversed;
    if (negative){
        reversed = -Math.abs(reversed);
    }
    return reversed;
}

module.exports = reverseInt;

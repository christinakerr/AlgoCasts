// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let vowels = 0;
    for (letter of str){
        if (letter.toLowerCase() === "a" ||
        letter.toLowerCase() === "e" ||
        letter.toLowerCase() === "i" ||
        letter.toLowerCase() === "o" ||
        letter.toLowerCase() === "u"
        ) {
            vowels++;
        }
    }
    return vowels;
}

module.exports = vowels;

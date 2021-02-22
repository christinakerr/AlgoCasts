// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let arr = str.split(" ");
    let newArr = [];
    for (let word of arr){
        const letter = word[0].toUpperCase();
        newArr.push(word.replace(word[0], letter));
    }
    return newArr.join(" ");
}

module.exports = capitalize;

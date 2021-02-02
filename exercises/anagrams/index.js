// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    let result = false;
    stringA.toLowerCase().replace(/[^/w]/g, "");
    stringB.toLowerCase().replace(/[^/w]/g, "");

    let mapA = {};
    let mapALength = 0;
    let mapB = {};
    let mapBLength = 0;

    for (let char of stringA){
        mapA[char] = mapA[char] + 1 || 1;
        mapALength++
    }

    for (let char of stringB){
        mapB[char] = mapB[char] + 1 || 1;
        mapBLength++
    }

    if (mapALength > mapBLength){
        for (const [key, value] of Object.entries(mapA)) {
            if (mapA[key] === mapB[key]){
                result = true;
            } else {
                result = false;
            }
        }
    } else {
        for (const [key, value] of Object.entries(mapB)) {
            if (mapA[key] === mapB[key]){
                result = true;
            } else {
                result = false;
            }
        }
    }
    return result;
}

module.exports = anagrams;

// Find the missing letter in the passed letter range and return it.  If all letters are present return undefined.
// ex.
// missingLetters("abce") == "d"
// missingLetters("abcdefghjklmno") == "i"
// missingLetters("abcdefghijklmnoprstuvwxyz") == undefined

function missingLetters(str) {
    let compare = str.charCodeAt(0);
    let missing;

    str.split('').map((char, i) => {
        if(str.charCodeAt(i) == compare) {
            ++compare;
        } else {
            missing = String.fromCharCode(compare);
        }
    });

    return missing;
}

console.log(missingLetters("abce")); // d
// first character code 'a' represents 97, 'b' represents 98

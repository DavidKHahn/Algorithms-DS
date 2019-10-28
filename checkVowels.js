function vowels(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0
}
/*REGEX:

 'g' attempts to find all values related to cases not just 1st
 'i' will take care of lower or upper cases
*/
    console.log('Number of Vowels:', vowels('Cranberries'))

// module.exports = vowels;

// let count = 0;
// const checkVowels = ['a','e','i','o','u'];

// for (let char of str.toLowerCase()) {
//     if (checkVowels.includes(char)) {
//     count++
//     }
// }
// return count;
// }

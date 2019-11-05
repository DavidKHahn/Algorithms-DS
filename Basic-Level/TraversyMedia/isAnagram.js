// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {
    return formatStr(str1) === formatStr(str2);
}

// Helper function
function formatStr(str) {
    return str
// regex: strip anything that is not word character including spaces (letter or number) and replace /w empty ''
        .replace(/[^\w]/g, '')
        .toLowerCase()
        .split('')
        .sort()
        .join('')
}

console.log(isAnagram('elbow','below'))
// Google Question

// Give an array = [2, 5, 1, 2, 3, 5, 1, 2, 4]:
// It should return 2

// Given an array = [2, 1, 1, 2, 3, 5, 1, 2, 4]:
// It should return 1

// Given an array = [2, 3, 4, 5]:
// It should return undefined

// Naive approach:

function firstRecurringChar(input){
    for (let i = 0; i < input.length; i++) {
        // start at j = 1 to compare with 2nd index instead of the same first
        // i + 1 will always move one to the right where i is so that '5' in the given example will not always be called
        for (let j = i + 1; j < input.length; j++) {
            if (input[i] === input[j]) {
                return input[i];
            }
        }
    }
    return undefined;
}

console.log(firstRecurringChar([2, 5, 1, 2, 3, 5, 1, 2, 4]));

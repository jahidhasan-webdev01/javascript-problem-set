// Problem 11: Find the Sum of an Array  [Easy]
// Description: Write a function sumArray(arr) that returns the sum of all numbers in an array.
// Example:
// Input: [1, 2, 3, 4, 5]  → Output: 15
// Hint: Use reduce() or a for loop.
const sumArray = (arr) => {
    return arr.reduce((total, number) => total + number, 0);
}
// console.log(sumArray([1, 2, 3, 4, 5]));

// Problem 12: Find Maximum Value in Array  [Easy]
// Description: Write a function findMax(arr) that returns the largest number in an array without using Math.max().
// Example:
// Input: [3, 1, 7, 2, 9]  → Output: 9
// Hint: Loop through and track the largest value found.
const findMax = (arr) => {
    let maxNumber = arr[0];
    for (const number of arr) {
        if (number > maxNumber) {
            maxNumber = number;
        }
    }
    return maxNumber;
}
// console.log(findMax([1, 2, 3, 4, 5, 29, 4, 65, 99, 3, 7]));

// Problem 13: Remove Duplicates from Array  [Easy]
// Description: Write a function removeDuplicates(arr) that returns a new array with duplicate values removed.
// Example:
// Input: [1, 2, 2, 3, 3, 4]  → Output: [1, 2, 3, 4]
// Hint: Use Set or filter() with indexOf().
const removeDuplicates = (arr) => {
    return arr.filter((number, index) => {
        return arr.indexOf(number) === index
    })
}
// console.log(removeDuplicates([1, 2, 3, 2, 9, 4, 2, 6, 4, 9]));

// Problem 14: Flatten a Nested Array  [Medium]
// Description: Write a function flattenArray(arr) that flattens one level of a nested array.
// Example:
// Input: [1, [2, 3], [4, 5]]  → Output: [1, 2, 3, 4, 5]
// Hint: Use flat() or reduce() with concat().
const flattenArray = (arr) => {
    return arr.reduce((all, current) => all.concat(current), []);
}
// console.log(flattenArray([1, [2, 3], [4, 5]]));

// Problem 15: Chunk an Array  [Medium]
// Description: Write a function chunkArray(arr, size) that splits an array into chunks of a given size.
// Example:
// Input: [1,2,3,4,5], 2  → Output: [[1,2],[3,4],[5]]
// Hint: Use a while loop with slice().
const chunkArray = (arr, size) => {
    let result = [];

    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size))
    }

    return result;
}
// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 2));
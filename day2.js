// Problem 6: Reverse a String  [Easy]
// Description: Write a function reverseString(str) that returns the reverse of a given string.
// Example:
// Input: 'hello'   → Output: 'olleh'Input: 'world'   → Output: 'dlrow'
// Hint: Use split(''), reverse(), and join('').
const reverseString = (str) => {
    return str.split("").reverse().join("")
}
// console.log(reverseString("world"));

// Problem 7: Count Vowels in a String
const countVowels = (str) => {
    const vowels = 'aeiou';
    let count = 0;

    for (const word of str) {
        if (vowels.includes(word.toLowerCase())) {
            count += 1;
        }
    }
    return count;
}
// console.log(countVowels("Everyone"));

// Problem 8: Check Palindrome
const isPalindrome = (str) => {
    const reverseString = str.split("").reverse().join("");

    return str === reverseString;
}
// console.log(isPalindrome("racecar"));

// Problem 9: Capitalize First Letter of Each Word
// Hint: Use split(' '), map(), and join(' ').
const titleCase = (str) => {
    return str.split(" ").map((word) => word[0].toUpperCase() + word.slice(1)).join(" ")
}
// console.log(titleCase("hello world"));

// Problem 10: Count Occurrences of a Character
const countChar = (str, char) => {
    let count = 0;
    for (const word of str) {
        if (word.toLowerCase() === char.toLowerCase()) {
            count += 1;
        }
    }

    return count;
}
// console.log(countChar("helLo", "l"));
// Problem 6: Reverse a String  [Easy]
// Description: Write a function reverseString(str) that returns the reverse of a given string.
// Example:
// Input: 'hello'   → Output: 'olleh'Input: 'world'   → Output: 'dlrow'
// Hint: Use split(''), reverse(), and join('').
const reverseString = (str) => {
    return str.split("").reverse().join("")
}
// console.log(reverseString("world"));

// Problem 7: Count Vowels in a String  [Easy]
// Description: Write a function countVowels(str) that counts and returns the number of vowels (a, e, i, o, u) in a string.
// Example:
// Input: 'hello'   → Output: 2Input: 'javascript' → Output: 3
// Hint: Use a loop or match() with a regular expression.
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

// Problem 8: Check Palindrome  [Easy]
// Description: Write a function isPalindrome(str) that returns true if the string reads the same forwards and backwards.
// Example:
// Input: 'racecar'  → Output: trueInput: 'hello'    → Output: false
// Hint: Compare the string to its reverse.
const isPalindrome = (str) => {
    const reverseString = str.split("").reverse().join("");

    return str === reverseString;
}
// console.log(isPalindrome("racecar"));

// Problem 9: Capitalize First Letter of Each Word  [Easy]
// Description: Write a function titleCase(str) that capitalizes the first letter of every word in a string.
// Example:
// Input: 'hello world'  → Output: 'Hello World'
// Hint: Use split(' '), map(), and join(' ').
const titleCase = (str) => {
    return str.split(" ").map((word) => word[0].toUpperCase() + word.slice(1)).join(" ")
}
// console.log(titleCase("hello world"));

// Problem 10: Count Occurrences of a Character  [Easy]
// Description: Write a function countChar(str, char) that returns how many times a character appears in a string.
// Example:
// Input: 'banana', 'a'  → Output: 3
// Hint: Use split(char).length - 1 or a loop.
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
const sumArray = (arr) => {
    return arr.reduce((total, number) => total + number, 0);
}
// console.log(sumArray([1, 2, 3, 4, 5]));

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

const removeDuplicates = (arr) => {
    return arr.filter((number, index) => {
        return arr.indexOf(number) === index
    })
}
// console.log(removeDuplicates([1, 2, 3, 2, 9, 4, 2, 6, 4, 9]));

const flattenArray = (arr) => {
    return arr.reduce((all, current) => all.concat(current), []);
}
// console.log(flattenArray([1, [2, 3], [4, 5]]));

const chunkArray = (arr, size) => {
    let result = [];

    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size))
    }

    return result;
}
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 2));
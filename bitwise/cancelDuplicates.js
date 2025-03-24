const removeDuplicatesUsingXOR = (arr) => {
    let result = 0;

    for (let num of arr) {
        result ^= num;  // XOR all elements
    }

    return result;
};

// Example 1: Array with duplicates
let array1 = [0, 1, 2, 1, 2, 4];
console.log(`Unique element: ${removeDuplicatesUsingXOR(array1)}`);  // Output: 4

// Example 2: Array with multiple duplicates
let array2 = [3, 5, 3, 4, 5, 4, 7];
console.log(`Unique element: ${removeDuplicatesUsingXOR(array2)}`);  // Output: 7

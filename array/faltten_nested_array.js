// Flatten a deeply nested array without using .flat(Infinity) (write it yourself with recursion).
function flattenArray(arr) {
    let result = [];

    for (let element of arr) {
        if (Array.isArray(element)) {
            result = result.concat(flattenArray(element));
        } else {
            result.push(element);
        }
    }

    return result;
}

const arr = [1, [2, [3, [4, 5]]], 6];

console.log(flattenArray(arr));
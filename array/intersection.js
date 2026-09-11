//Given two arrays, return the intersection.
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];

const intersection= arr1.filter((num)=>arr2.includes(num));

console.log(intersection);

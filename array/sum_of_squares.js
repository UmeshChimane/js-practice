// From an array of numbers, get the sum of squares of even numbers.


const arr=[1,2,3,4,5,6,7,8,9];

const res= arr.filter((num)=>num%2==0).map((num)=>num*num).reduce((acc,num)=>{return acc+num},0);
console.log(res);

// Write a createCounter() function that returns an object with increment, decrement, and getValue methods. 
// The count must not be accessible from outside.


function createCounter() {
    let count = 0; 

    return{
        increment: function() {
            count++;
        },
        decrement: function() {
            count--;
        },
        getValue: function() {
            return count;
        }
    }
}

const counter = createCounter();

counter.increment();
counter.increment();
console.log(counter.getValue()); 

counter.decrement();
console.log(counter.getValue());

// Write a memoize(fn) that caches results based on arguments.


function memoize(fn) {
  const cache = {};

  return function (arg) {
    if (arg in cache) {
      return cache[arg];
    }

    const result = fn(arg);
    cache[arg] = result;

    return result;
  };
}


function square(num) {
  console.log("Calculating...");
  return num * num;
}

const memoizedSquare = memoize(square);

console.log(memoizedSquare(5));  // Calculating... 25
console.log(memoizedSquare(5));  // 25
console.log(memoizedSquare(10)); // Calculating... 100
console.log(memoizedSquare(10)); // 100
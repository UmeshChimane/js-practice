//problem 
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

// 1. Using let
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}


// 2. Using IIFE
for (var i = 0; i < 3; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(j);
    }, 1000);
  })(i);
}


// 3. Using setTimeout's third argument
for (var i = 0; i < 3; i++) {
  setTimeout(function (j) {
    console.log(j);
  }, 1000, i);
}
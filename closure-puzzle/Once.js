//Write a once(fn) function that ensures fn is called only the first time.


function once(fn) {
  let called = false;

  return function () {
    if (!called) {
      called = true;
      fn();
    }
  };
}

function sayHello() {
  console.log("Hello");
}

const helloOnce = once(sayHello);

helloOnce(); 
helloOnce(); 
helloOnce(); 
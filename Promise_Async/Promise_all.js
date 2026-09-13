function myPromiseAll(promises) {
    return new Promise((resolve, reject) => {

        let results = [];
        let completed = 0;

        promises.forEach((promise, index) => {

            promise.then((data) => {

                results[index] = data;
                completed++;

                if (completed === promises.length) {
                    resolve(results);
                }

            }).catch((error) => {
                reject(error);
            });
        });
    });
}


// Example

let p1 = Promise.resolve("Apple");
let p2 = Promise.resolve("Banana");
let p3 = Promise.resolve("Mango");

myPromiseAll([p1, p2, p3])
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
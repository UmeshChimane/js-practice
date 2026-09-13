async function retry(fn, attempts) {
    for (let i = 1; i <= attempts; i++) {
        try {
            return await fn();
        } catch (error) {
            if (i === attempts) {
                throw error;
            }
            console.log("Retrying...");
        }
    }
}


async function test() {
    throw new Error("Failed");
}

retry(test, 3)
    .then(result => console.log(result))
    .catch(error => console.log(error.message));
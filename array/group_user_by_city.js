// From an array of user objects { name, age, city }, return an object grouping users by city.

const users = [
    { name: "Umesh", age: 25, city: "Pune" },
    { name: "Shripad", age: 28, city: "Mumbai" },
    { name: "Roshan", age: 24, city: "Jalgaon" },
    { name: "Divya", age: 27, city: "Pune" },
    { name: "Lakhan", age: 26, city: "Mumbai" }
];


const groupedUsers = users.reduce((acc, user) => {

    if (!acc[user.city]) {
        acc[user.city] = [];
    }

    acc[user.city].push(user);

    return acc;

}, {});

console.log(groupedUsers);
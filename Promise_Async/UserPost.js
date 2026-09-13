async function getUsersAndPosts() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) 
            {
         throw new Error(`HTTP error: ${response.status}`);
        }
        const users = await response.json();

        console.log(users);

        const results = await Promise.all(

            users.map(async (user) => {
                try {
                    const response = await fetch(
                        `https://jsonplaceholder.typicode.com/users/${user.id}/posts`
                    );

                    const posts = await response.json();
                    console.log("Posts fetched for user:", user.id);
                    return {
                        user: user,
                        posts: posts
                    };

                } catch (error) {

                    console.log(
                        "Failed to fetch posts for user:",
                        user.id
                    );

                    throw error;
                }
            })
        );
        results.forEach((result) => {

            console.log("User:", result.user);
            console.log("Posts:", result.posts);
        });
    } catch (error) {
        console.log("Something went wrong:", error.message);
    }
}
getUsersAndPosts();
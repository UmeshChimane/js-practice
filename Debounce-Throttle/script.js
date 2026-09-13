function debounce(fn, delay) {

    let timer;

    return function () {

        clearTimeout(timer);

        timer = setTimeout(() => {
            fn();
        }, delay);
    };
}
function searchAPI() {

    console.log("API call fired");

}

const debouncedSearch = debounce(searchAPI, 500);

document.getElementById("search").addEventListener("input", () => {

    debouncedSearch();
});


function throttle(fn, delay) {

    let lastTime = 0;

    return function () {

        const currentTime = Date.now();

        if (currentTime - lastTime >= delay) {
            fn();
            lastTime = currentTime;
        }
    };
}

function showScrollPosition() {

    console.log("Scroll position:", window.scrollY);
}

const throttledScroll = throttle(showScrollPosition, 200);

window.addEventListener("scroll", () => {

    throttledScroll();

});
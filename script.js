document.addEventListener("DOMContentLoaded", () => {
    const heading = document.querySelector("h1");

    heading.addEventListener("click", () => {
        alert("Welcome to Allison's Portfolio!");
    });

    console.log("Portfolio loaded successfully!");
});
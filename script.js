const btn = document.getElementById("menu-btn");
const nav = document.querySelector("nav");

btn.addEventListener("click", () => {
    nav.classList.toggle("active");
})

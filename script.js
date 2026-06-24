const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

const images = [
    "./sampleimage/guarding.jpg",
    "/sampleimage/member.jpg",
    "./sampleimage/Camera.jpg",
    "./sampleimage/camera3.jpg",
    "./sampleimage/central.jpg"

];

let currentIndex = 0;
const image = document.getElementById("myImage");

setInterval(() => {
    image.style.opacity = "0";

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length;
        image.src = images[currentIndex];
        image.style.opacity = "1";
    }, 500);

}, 3000);
// DARK MODE
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

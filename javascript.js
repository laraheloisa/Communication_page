const scrollContainer = document.getElementById("scroll-container");

let isDown = false;
let startX;
let scrollLeft;

scrollContainer.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - scrollContainer.offsetLeft;
    scrollLeft = scrollContainer.scrollLeft;
    scrollContainer.style.cursor = "grabbing";
});

scrollContainer.addEventListener("mouseleave", () => {
    isDown = false;
    scrollContainer.style.cursor = "grab";
});

scrollContainer.addEventListener("mouseup", () => {
    isDown = false;
    scrollContainer.style.cursor = "grab";
});

scrollContainer.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollContainer.offsetLeft;
    const walk = (x - startX) * 2; // Multiplicador da velocidade de rolagem
    scrollContainer.scrollLeft = scrollLeft - walk;
});

scrollContainer.addEventListener("mouseenter", () => {
    scrollContainer.scrollLeft += 100;
});

scrollContainer.addEventListener("mouseleave", () => {
    scrollContainer.scrollLeft -= 100;
});

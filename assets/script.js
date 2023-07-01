const circles = document.querySelectorAll(".circle");
const button = document.querySelector("#button");
const display = document.querySelector("#rating-number");
const rateContainer = document.querySelector(".rate-container");
const resultContainer = document.querySelector(".result-container");
let selectedCircle = 0;

circles.forEach(circle => {
    circle.addEventListener("click", () => {
        if (circle.classList.contains("active")) {
            circle.classList.remove("active");
            selectedCircle = null;
        } else {
            if (selectedCircle) {
                selectedCircle.classList.remove("active");
            }
            circle.classList.add("active");
            selectedCircle = circle;
        }
    });
});

button.onclick = () => {
    rateContainer.style.display = "none";
    resultContainer.style.display = "flex";
    display.textContent = selectedCircle.textContent || selectedCircle;
}





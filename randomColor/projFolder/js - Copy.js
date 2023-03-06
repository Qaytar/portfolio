const button = document.querySelector("button");
const h1 = document.querySelector("h1");
let varRandomRGB;

//generates the initial random RGB
randomRGB();

//button color to initial random RGB
button.style.backgroundColor = varRandomRGB;

//****when button clicked..****
button.addEventListener("click", () => {
    //..changes background color and h1
    changeBackground()

    //..generates the next random color - this changes the variable "varRandomRGB"!
    randomRGB()

    //..uses the new color to change button  background
    button.style.backgroundColor = varRandomRGB
});

//function definitions
function randomRGB() {
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    varRandomRGB = `rgb(${r}, ${g}, ${b})`
}
function changeBackground() {
    document.body.style.backgroundColor = varRandomRGB
    h1.innerText = varRandomRGB
    h1.classList.add("randomH1")
}
// Program starts here
const container = document.querySelector(".container");

// Ask the user for the number of rows and columns
let gridSize = prompt("Enter the size for the grid (e.g., 16 for a 16x16 grid):");
gridSize = parseInt(gridSize);  // Convert the input to an integer

// Check if the input is valid
if (gridSize <= 0 || gridSize > 100) {
    alert("Please enter a valid number betweem 1 and 100.");
}

// Variable to track if the mouse is held down
let mouseDown = false;
document.body.addEventListener("mousedown", () => {
    mouseDown = true;
});
document.body.addEventListener("mouseup", () => {
    mouseDown = false;
});





// grid creates here
for (let i = 0; i < gridSize; i++) {
    const row = document.createElement("div");
    row.className = 'row'; // row.setAttribute("class", `row`);

    for (let j = 0; j < gridSize; j++) {
        const pixel = document.createElement("div");
        pixel.className = "pixel"; // pixel.setAttribute("class", "pixel");
        row.appendChild(pixel);
    }

    container.appendChild(row);
}




// color changes here
const pixels = document.querySelectorAll(".pixel");
let isColor = false;

// switch color mode or black mode
const color = document.querySelector("#color");
color.addEventListener("click", () => {
    isColor ? color.textContent = "color": color.textContent = "black";
    isColor = !isColor;
});

// we use the .forEach method to iterate through each pixel
pixels.forEach((pix) => {
    // random colors, the following three lines outside the EventListener ensures the color can change no more than one time
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);

    // and for each one we add a 'mouseenter' listener
    pix.addEventListener("mouseenter", () => {
        if (mouseDown) {
            if (!isColor) {
                pix.style.backgroundColor = "black";
            } else {
                pix.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 0.4)`;
            }
        }
    });
});

// erase functionality
const erase = document.querySelector("#erase");
erase.addEventListener("click", () => {
    pixels.forEach((pix) => {
        pix.style.backgroundColor = "white";
    });
})
// Making a 16x16 grid
const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (i = 0; i < rows * cols; i++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
    container.addEventListener("mouseover", hoverBlack);
  }
}

makeRows(16, 16);

// Color grid black
function hoverBlack(e) {
  if (e.target.className === "grid-item") {
    e.target.style.background = "black";
    e.target.style.opacity = 1;
  }
}

function getRandColor() {
  let letters = "0123456789ABCDEF";
  let getRandLetter = letters.charAt(Math.floor(Math.random() * 16));
  let randColor = "#";

  for (i = 0; i < 6; i++) {
    getRandLetter = letters.charAt(Math.floor(Math.random() * 16));
    randColor += getRandLetter;
  }
  return randColor;
}

function hoverRandColor(e) {
  if (e.target.className === "grid-item") {
    e.target.style.background = getRandColor();
    e.target.style.opacity = 1;
  }
}

let colorButton = document.querySelector(".btn");
colorButton.addEventListener("click", function (e) {
  if (e.target.id == "defaultColor") {
    container.removeEventListener("mouseover", hoverRandColor);
    container.addEventListener("mouseover", hoverBlack);
  } else if (e.target.id == "randomColor") {
    container.removeEventListener("mouseover", hoverBlack);
    container.addEventListener("mouseover", hoverRandColor);
  }
});

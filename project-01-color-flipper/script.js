const colors = ["teal", "indigo", "maroon", "chocolate", "violet",
  "salmon", "firebrick", "#3498db", "#2ecc71", "#f39c12",
  "#e74c3c", "#9b59b6", "#1abc9c", "#f1c40f", "rgb(255, 99, 71)",
  "rgb(106, 90, 205)", "rgb(102, 51, 153)", "rgb(255, 165, 0)",
  "hsl(0, 100%, 75%)", "hsl(120, 100%, 50%)", "hsl(240, 50%, 40%)"
];

const button = document.getElementById("btn");
const colorName = document.getElementById("colorname");
const body = document.body;

function setRandomBackground(colors) {
  const randomcolor = colors[Math.floor(Math.random() * colors.length)];
  body.style.backgroundColor = randomcolor;
  colorName.textContent = randomcolor;
  colorName.style.color = randomcolor;
  button.style.backgroundColor = randomcolor;
}


button.addEventListener("click", function () {
  setRandomBackground(colors);
})

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    button.click();
  }
})

setRandomBackground(colors);






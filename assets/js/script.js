// Hover
const rightColumn = document.getElementById("right-column");
const rightCharacterImage = document.querySelector(".right-character-image");
const btn1 = document.querySelector(".hover-btn-two");

rightColumn.addEventListener("mouseover", () => {
  rightCharacterImage.style.filter = "none";
  rightCharacterImage.style.transition = "0.1s ease-in";
  btn1.style.background = "#B03052";
  btn1.style.transition = "0.1s ease-in";
});

rightColumn.addEventListener("mouseout", () => {
  btn1.style.background = "transparent";
  rightCharacterImage.style.filter = "grayscale(100%)";
});

const leftColumn = document.getElementById("left-column");
const leftCharacterImage = document.querySelector(".left-character-image");
const btn2 = document.querySelector(".hover-btn-one");

leftColumn.addEventListener("mouseover", () => {
  leftCharacterImage.style.filter = "none";
  leftCharacterImage.style.transition = "0.1s ease-in";
  btn2.style.background = "#B03052";
  btn2.style.transition = "0.1s ease-in";
});
1;
leftColumn.addEventListener("mouseout", () => {
  btn2.style.background = "transparent";
  leftCharacterImage.style.filter = "grayscale(100%)";
});

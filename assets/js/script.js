const indicators = document.querySelectorAll(".indicator");

indicators.forEach((indicator) => {
  indicator.addEventListener("click", (e) => {
    indicators.forEach((ind) => {
      ind.style.textShadow = "none";
      ind.style.boxShadow = "none";
      ind.style.background = "none";
    });

    const targetSection = document.querySelector(
      indicator.getAttribute("data-target")
    );

    indicator.style.boxShadow = "0 0 55px rgb(255, 255, 255)";
    indicator.style.background = "rgba(0, 0, 0, 0)";

    const scrollToSection = (target, offset = 0) => {
      const targetPosition =
        target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    };

    scrollToSection(targetSection, 30);
  });
});

// Hover
const rightColumn = document.getElementById("right-column");
const rightCharacterImage = document.querySelector(".right-character-image");
const btn1 = document.querySelector(".hover-btn-two");

rightColumn.addEventListener("mouseover", () => {
  rightCharacterImage.style.filter = "none";
  rightCharacterImage.style.transition = "0.9s ease-in-out";
  btn1.style.background = "#55983d";
  btn1.style.transition = "0.9s ease-in-out";
});

rightColumn.addEventListener("mouseout", () => {
  btn1.style.background = "transparent";
  rightCharacterImage.style.filter = "grayscale(80%) contrast(60%)";
});

const leftColumn = document.getElementById("left-column");
const leftCharacterImage = document.querySelector(".left-character-image");
const btn2 = document.querySelector(".hover-btn-one");

leftColumn.addEventListener("mouseover", () => {
  leftCharacterImage.style.filter = "none";
  leftCharacterImage.style.transition = "0.9s ease-in-out";
  btn2.style.background = "#55983d";
  btn2.style.transition = "0.9s ease-in-out";
});

leftColumn.addEventListener("mouseout", () => {
  btn2.style.background = "transparent";
  leftCharacterImage.style.filter = "grayscale(80%) contrast(60%)";
});

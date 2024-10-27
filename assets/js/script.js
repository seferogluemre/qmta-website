const indicators = document.querySelectorAll(".indicator");

indicators.forEach((indicator) => {
  indicator.addEventListener("click", (e) => {
    indicators.forEach((ind) => {
      ind.style.textShadow = "none";
      ind.style.boxShadow = "none";
      ind.style.background = "transparent";
    });

    const targetSection = document.querySelector(
      indicator.getAttribute("data-target")
    );

    indicator.style.boxShadow = "0 0 55px rgb(255, 255, 255)";
    indicator.style.background = "rgba(0, 0, 0, 0.2)";

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

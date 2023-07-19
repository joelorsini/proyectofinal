document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelector(".slides");
  let slidePosition = 0;
  const totalSlides = slides.children.length;
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  prevBtn.addEventListener("click", function () {
    moveSlide("prev");
  });

  nextBtn.addEventListener("click", function () {
    moveSlide("next");
  });

  function moveSlide(direction) {
    slides.style.transition = "none"; // Desactivamos la transición para un cambio instantáneo
    prevBtn.disabled = true; // Deshabilitamos los botones durante el cambio de imagen
    nextBtn.disabled = true;

    if (direction === "next") {
      slidePosition++;
      if (slidePosition === totalSlides) slidePosition = 0;
    } else {
      slidePosition--;
      if (slidePosition < 0) slidePosition = totalSlides - 1;
    }

    slides.style.transform = `translateX(-${slidePosition * 100}%)`;

    // Restauramos la transición y habilitamos los botones después de un breve retraso
    setTimeout(function () {
      slides.style.transition = ""; // Restauramos la transición predeterminada
      prevBtn.disabled = false; // Habilitamos los botones nuevamente
      nextBtn.disabled = false;
    }, 500); // Ajusta el tiempo según la duración deseada del cambio de imagen
  }
});

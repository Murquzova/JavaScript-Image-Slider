const slides = document.querySelectorAll(".slide");
slides.forEach((slide) => {
  slide.addEventListener("click", () => {
    clearActiveClasses();
    slide.classList.add("active");
    document.body.style.backgroundColor=changeColor()
  });
});

function clearActiveClasses() {
  slides.forEach((a) => a.classList.remove("active"));
}

function changeColor() {
  let color = "#";
  let symbols = "0123456789abcdef";
  for (let i = 0; i < 6; i++) {
    color += symbols.charAt(Math.floor(Math.random() * symbols.length));
  }
  return color;
}
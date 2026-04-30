window.addEventListener("scroll", function () {
  const scrollY = window.scrollY;
  let parallaxSpeed = .6;

  const parallaxElements = document.querySelectorAll(".parallax-bg");

  parallaxElements.forEach(element => {
    if (element.tagName === "VIDEO") {
      element.style.transform = `translate(-50%, -50%) translateY(${scrollY * parallaxSpeed}px)`;
    } else {
      element.style.backgroundPosition = `50% ${scrollY * parallaxSpeed}px`;
    }
  });
});
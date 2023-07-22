let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

// ScrollReveal configuration
const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.about', { delay: 200, origin: 'left' });
sr.reveal('.my-image', { delay: 450, origin: 'right' });

// Portfolio Slider$(document).ready(function () {
  const carousel = $(".carousel");
  const videos = carousel.find(".video-wrapper");
  const prevButton = $(".prev-button");
  const nextButton = $(".next-button");

  let currentVideoIndex = 0;

  prevButton.on("click", function () {
    currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
    updateCarousel();
  });

  nextButton.on("click", function () {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    updateCarousel();
  });

  function updateCarousel() {
    const translateXValue = -currentVideoIndex * 100;
    carousel.css("transform", `translateX(${translateXValue}%)`);
  }


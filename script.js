let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.about',{delay:200, origin:'left'});
sr.reveal('.my-image',{delay:450, origin:'right'});

//portfolio
const sliderContainer = document.querySelector('.slider-container');
const sliderBtnLeft = document.querySelector('.slider-btn--left');
const sliderBtnRight = document.querySelector('.slider-btn--right');
const iframes = document.querySelectorAll('.slider-container iframe');

let currentIndex = 0;

sliderBtnLeft.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSliderPosition();
  }
});

sliderBtnRight.addEventListener('click', () => {
  if (currentIndex < iframes.length - 1) {
    currentIndex++;
    updateSliderPosition();
  }
});

function updateSliderPosition() {
  const translation = -currentIndex * (280 + 10); // 280px width + 10px margin
  sliderContainer.style.transform = `translateX(${translation}px)`;

  // Remove and add current-video class to the current video iframe
  iframes.forEach((iframe, index) => {
    iframe.classList.remove('current-video');
    if (index === currentIndex) {
      iframe.classList.add('current-video');
    }
  });
}

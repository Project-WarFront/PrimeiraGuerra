const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.arma');

let currentIndex = 1; 

function updateCarousel() {
  const itemWidth = items[0].offsetWidth + 100;
  const offset = (track.parentElement.offsetWidth / 2) - (items[currentIndex].offsetWidth / 2);

  track.style.transform = `translateX(${-currentIndex * itemWidth + offset}px)`;

  items.forEach((item, i) => {
    item.classList.toggle('active', i === currentIndex);
  });
}

updateCarousel();


items.forEach((item, i) => {
  item.addEventListener('click', () => {
    currentIndex = i;
    updateCarousel();
  });
});

window.addEventListener('resize', updateCarousel);
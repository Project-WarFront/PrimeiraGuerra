const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.arma');

let currentIndex = 0; 

function updateCarousel() {
  const itemWidth = items[0].offsetWidth + 60; 
  const offset = (track.parentElement.offsetWidth / 2) - (items[currentIndex].offsetWidth / 2);

  track.style.transform = `translateX(${-currentIndex * itemWidth + offset}px)`;

  items.forEach((item, i) => {
    item.classList.toggle('active', i === currentIndex);
  });
}

function goToNext() {
  if (currentIndex < items.length - 1) {
    currentIndex++;
    updateCarousel();
  }
}

function goToPrevious() {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
}


document.querySelector('.carousel').addEventListener('wheel', (event) => {
  if (event.deltaY > 0) {
    goToNext();
  } else {
    goToPrevious();
  }
  event.preventDefault(); 
}, { passive: false });


window.addEventListener('resize', updateCarousel);


updateCarousel();
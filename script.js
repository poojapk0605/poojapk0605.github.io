// Toggle menu for the hamburger icon
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Carousel functionality
const track = document.querySelector('.carousel-track');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const items = document.querySelectorAll('.carousel-item');

let index = 0;

// Sticky Navbar
window.onscroll = function() {
  stickyNavbar();
};

const navbar = document.querySelector('.navbar');
const sticky = navbar.offsetTop;

function stickyNavbar() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// Update carousel
function updateCarousel() {
  const itemWidth = items[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${index * itemWidth}px)`;
}

// Event listeners for carousel buttons
nextBtn.addEventListener('click', () => {
  if (index < items.length - 3) {  // Adjust the condition to account for visible items
    index++;
    updateCarousel();
  }
});

prevBtn.addEventListener('click', () => {
  if (index > 0) {
    index--;
    updateCarousel();
  }
});

// Ensure carousel updates on resize
window.addEventListener('resize', updateCarousel);

// Initial setup
updateCarousel();

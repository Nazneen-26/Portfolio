// Function to toggle mobile menu and handle active state
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let navLinks = document.querySelectorAll('.navbar a');

const toggleMenu = () => {
  menuIcon.classList.toggle('active');
  navbar.classList.toggle('active');
  document.body.classList.toggle('no-scroll'); // Prevent body scroll when menu is open
};

menuIcon.onclick = toggleMenu;

// Close menu when a nav link is clicked
navLinks.forEach(link => {
  link.onclick = () => {
    if (navbar.classList.contains('active')) {
      toggleMenu();
    }
    // Update active link
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  };
});

// Update active nav link on scroll
window.onscroll = () => {
  let sections = document.querySelectorAll('section');
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header .navbar a[href*=' + id + ']').classList.add('active');
      });
    }
  });

  // Sticky header effect
  let header = document.querySelector('.header');
  header.classList.toggle('sticky', window.scrollY > 100);
};


// Home Section Typed.js
const typedHome = new Typed('.home-typed', {
  strings: ['Frontend Developer.', 'Web Designer.', 'Programmer.'],
  typeSpeed: 50,
  backSpeed: 80,
  backDelay: 1200,
  loop: true
});


// About Section Typed.js
const typedAbout = new Typed('.about-typed', {
  strings: ['Frontend Developer.', 'Web Designer.', 'Programmer.'],
  typeSpeed: 50,
  backSpeed: 80,
  backDelay: 1200,
  loop: true
});


// Swiper setup for Project section with custom animations
const swiper = new Swiper('.swiper', {
  loop: true,
  spaceBetween: 30,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  breakpoints: {
    1024: { slidesPerView: 3 },
    768: { slidesPerView: 2 },
    0: { slidesPerView: 1 },
  },
  watchSlidesProgress: true,
  
  // START: REVISED AND CORRECTED ANIMATION LOGIC
  on: {
    // This function will run for both init and every slide change
    progress: function () {
      const swiperInstance = this;
      swiperInstance.slides.forEach(slide => {
        const projectItem = slide.querySelector('.project-item');
        if (projectItem) {
          // Check if the slide is currently visible in the container
          if (slide.classList.contains('swiper-slide-visible')) {
            // If it's visible, add the animation class
            projectItem.classList.add('is-animated');
          } else {
            // If it's NOT visible, remove the class to reset the animation
            projectItem.classList.remove('is-animated');
          }
        }
      });
    },
  }
  // END: REVISED AND CORRECTED ANIMATION LOGIC
});

// ScrollReveal Animations
ScrollReveal({
    reset: false,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container .services-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
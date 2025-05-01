// Video Player
const video = document.getElementById('promo-video');
const playButton = document.getElementById('playButton');

function toggleVideo() {
    if (video.paused) {
        video.play();
        playButton.style.display = 'none';
    } else {
        video.pause();
        playButton.style.display = 'block';
    }
}

video.addEventListener('click', toggleVideo);
playButton.addEventListener('click', toggleVideo);

video.addEventListener('play', () => {
    playButton.style.display = 'none';
});

video.addEventListener('pause', () => {
    playButton.style.display = 'block';
});

const swiper = new Swiper('.testimonials-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '"></span>';
      },
    },
  });

// Testimonial Slider
// const testimonials = document.querySelectorAll('.testimonial');
// const track = document.querySelector('.testimonial-track');
// const dotsContainer = document.querySelector('.slider-dots');
// let currentSlide = 0;

// // Create dots
// testimonials.forEach((_, index) => {
//     const dot = document.createElement('div');
//     dot.classList.add('dot');
//     if (index === 0) dot.classList.add('active');
//     dot.addEventListener('click', () => goToSlide(index));
//     dotsContainer.appendChild(dot);
// });

// function goToSlide(index) {
//     currentSlide = index;
//     track.style.transform = `translateX(-${index * 100}%)`;
//     updateDots();
// }

// function updateDots() {
//     document.querySelectorAll('.dot').forEach((dot, index) => {
//         dot.classList.toggle('active', index === currentSlide);
//     });
// }

// function nextSlide() {
//     currentSlide = (currentSlide + 1) % testimonials.length;
//     goToSlide(currentSlide);
// }

// // Auto-advance slides every 5 seconds
// setInterval(nextSlide, 5000);

// Contact Form and Modal
const modal = document.getElementById('successModal');
const closeButton = document.querySelector('.close-button');
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    contactForm.reset();
});

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});
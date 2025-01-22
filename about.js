document.addEventListener('DOMContentLoaded', () => {
  // Slide-in animations for sections
  const sections = document.querySelectorAll('section');

  sections.forEach((section, index) => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(30px)';
    setTimeout(() => {
      section.style.transition = 'all 1s ease-out';
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
    }, index * 300);
  });

  // Initialize Owl Carousel
  $('.service_owl-carousel').owlCarousel({
    autoplay: true,
    center: true,
    nav: false,
    loop: true,
    margin: 30,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      991: { items: 3 }
    }
  });
});

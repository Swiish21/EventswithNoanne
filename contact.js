document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
  });

window.addEventListener('load', () => {
    const elements = document.querySelectorAll('.big-text, .subtitle');
    elements.forEach((el) => el.classList.add('animate'));
  });
  
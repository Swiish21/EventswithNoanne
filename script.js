document.addEventListener('DOMContentLoaded', () => {
  const elementsToAnimate = document.querySelectorAll('.big-text, .subtitle');

  elementsToAnimate.forEach((element, index) => {
    element.style.opacity = 0;
    element.style.transform = 'translateY(50px) scale(0.8)';
    setTimeout(() => {
      element.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
      element.style.opacity = 1;
      element.style.transform = 'translateY(0) scale(1)';
    }, index * 300); // Stagger the animations
  });
});
  
  function animateCount(element, start, end, duration) {
    let startTime = null;
  
    function count(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const current = Math.min(Math.floor(progress / duration * (end - start) + start), end);
      element.textContent = current;
      if (current < end) {
        requestAnimationFrame(count);
      }
    }
  
    requestAnimationFrame(count);
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const stats = document.querySelectorAll('.stat-item h3');
    stats.forEach(stat => {
      const endValue = parseInt(stat.textContent.replace(/\D/g, ''), 10);
      animateCount(stat, 0, endValue, 2000);
    });
  });
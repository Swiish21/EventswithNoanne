// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".big-text");
    elements.forEach((element, index) => {
      element.style.animation = `slideUp 1s ease-out forwards`;
      element.style.animationDelay = `${index * 0.2}s`;
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
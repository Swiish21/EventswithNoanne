// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    console.log('Event Types Page Loaded Successfully');
  
    // Modal elements
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const closeModal = document.querySelector('.close');
  
    // Add click events to type cards
    const cards = document.querySelectorAll('.type-card');
    cards.forEach(card => {
      card.addEventListener('click', () => {
        const eventType = card.querySelector('p').textContent;
        modalTitle.textContent = eventType;
        modalDescription.textContent = `Details about ${eventType} will be displayed here.`;
        
        // Add the slide-up animation class to the description
        modalDescription.classList.add('modal-description');
        
        modal.style.display = 'block';
      });
    });
  
    // Close modal on 'X' click
    closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    // Close modal when clicking outside of it
    window.addEventListener('click', event => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.big-text, .subtitle, h2');
  
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

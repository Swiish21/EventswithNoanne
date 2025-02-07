document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('schedule-modal');
    const viewScheduleBtn = document.getElementById('view-schedule-btn');
    const closeBtn = modal.querySelector('.close-btn');
  
    // Show modal on button click
    viewScheduleBtn.addEventListener('click', () => {
      modal.classList.add('show');
    });
  
    // Hide modal on close button click
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('show');
    });
  
    // Hide modal when clicking outside the modal content
    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.classList.remove('show');
      }
    });
  });
  
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


  let slideIndex = 0;
showSlides();

function moveSlide(n) {
  showSlides(slideIndex += n);
}

function showSlides() {
  let slides = document.getElementsByClassName("testimonial-item");
  if (slideIndex >= slides.length) { slideIndex = 0; }
  if (slideIndex < 0) { slideIndex = slides.length - 1; }

  for (let slide of slides) {
    slide.style.display = "none";
  }

  slides[slideIndex].style.display = "block";
}




// Open video modal
function openVideo() {
  const videoModal = document.getElementById("videoModal");
  const videoPlayer = document.getElementById("videoPlayer");

  // Display the modal
  videoModal.style.display = "block";

  // Play the video
  videoPlayer.play();

  // Request fullscreen
  if (videoPlayer.requestFullscreen) {
      videoPlayer.requestFullscreen();
  } else if (videoPlayer.webkitRequestFullscreen) {
      videoPlayer.webkitRequestFullscreen(); // For Safari
  } else if (videoPlayer.msRequestFullscreen) {
      videoPlayer.msRequestFullscreen(); // For IE/Edge
  }
}

// Close video modal
function closeVideo() {
  const video = document.getElementById("videoPlayer");

  // Pause the video and reset the time
  video.pause();
  video.currentTime = 0;

  // Exit fullscreen if applicable
  if (document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
      if (document.exitFullscreen) {
          document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen(); // For Safari
      } else if (document.msExitFullscreen) {
          document.msExitFullscreen(); // For IE/Edge
      }
  }

  // Hide the modal
  document.getElementById("videoModal").style.display = "none";
}


document.getElementById('copy-email-button').addEventListener('click', function() {
  const email = 'your-email@example.com'; // Replace with your actual email
  const tempInput = document.createElement('input');
  tempInput.value = email;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);
  alert('Email copied to clipboard!');
});

document.querySelectorAll('.picture-box').forEach(box => {
  const video = box.querySelector('video');
  
  box.addEventListener('mouseenter', () => {
    if (video) {
      video.play();
    }
  });
  
  box.addEventListener('mouseleave', () => {
    if (video) {
      video.pause();
      video.currentTime = 0; // Reset the video to the start
    }
  });
});






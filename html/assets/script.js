function submitFlag(expectedFlag, nextLevelUrl) {
  const flagInput = document.getElementById('flagInput').value.trim();
  const feedback = document.getElementById('feedback');
  
  if (flagInput === expectedFlag) {
    feedback.textContent = 'Access Granted! Redirecting to next mission...';
    feedback.style.color = '#00ff9f';
    feedback.classList.remove('opacity-0');
    console.log(`Redirecting to: ${nextLevelUrl}`); // Debug log
    setTimeout(() => {
      try {
        window.location.href = nextLevelUrl;
      } catch (e) {
        console.error(`Redirect failed: ${e}`);
        feedback.textContent = 'Error: Redirect failed. Please navigate to ' + nextLevelUrl;
        feedback.style.color = '#ff2e63';
      }
    }, 1000);
  } else {
    feedback.textContent = 'Access Denied. Try again.';
    feedback.style.color = '#ff2e63';
    feedback.classList.remove('opacity-0');
    setTimeout(() => {
      feedback.classList.add('opacity-0');
    }, 2000);
  }
}

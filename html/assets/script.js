function submitFlag(expectedFlag, nextLevelUrl) {
  const flagInput = document.getElementById('flagInput').value.trim();
  const feedback = document.getElementById('feedback');
  
  if (flagInput === expectedFlag) {
    feedback.textContent = 'Access Granted! Redirecting to next mission...';
    feedback.style.color = '#00ff9f';
    feedback.classList.remove('opacity-0');
    const fullUrl = window.location.origin + nextLevelUrl;
    console.log(`Attempting redirect to: ${fullUrl}`);
    setTimeout(() => {
      try {
        window.location.href = nextLevelUrl;
      } catch (e) {
        console.error(`Redirect failed: ${e}`);
        feedback.textContent = `Error: Redirect to ${nextLevelUrl} failed. Please navigate to ${fullUrl}`;
        feedback.style.color = '#ff2e63';
        alert(`Redirect failed. Please visit ${fullUrl} manually.`);
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

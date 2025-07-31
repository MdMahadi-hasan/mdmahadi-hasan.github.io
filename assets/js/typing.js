// typing.js
// This script animates a list of research interests inside the element with ID 'typing-text'.
// Define the phrases you want to cycle through. Feel free to edit this array to match
// your actual research interests or other descriptors.

document.addEventListener('DOMContentLoaded', () => {
  const phrases = [
    "Applied Econometrics",
    "Environmental and Resource Economics",
    "Machine Learning"
  ];
  let currentPhrase = 0;
  let currentChar = 0;
  const target = document.getElementById('typing-text');
  if (!target) return;

  function type() {
    if (currentChar < phrases[currentPhrase].length) {
      target.textContent += phrases[currentPhrase].charAt(currentChar);
      currentChar++;
      // Adjust typing speed (in milliseconds) by changing the value below
      setTimeout(type, 120);
    } else {
      // Pause before erasing
      setTimeout(erase, 2000);
    }
  }

  function erase() {
    if (currentChar > 0) {
      target.textContent = phrases[currentPhrase].substring(0, currentChar - 1);
      currentChar--;
      // Adjust erase speed (in milliseconds) by changing the value below
      setTimeout(erase, 60);
    } else {
      // Move to next phrase and restart typing
      currentPhrase = (currentPhrase + 1) % phrases.length;
      setTimeout(type, 800);
    }
  }
  type();
});

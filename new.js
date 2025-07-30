// Simple typing effect for subtitle (optional)
const subtitle = document.querySelector('.hero-subtitle');
const text = subtitle.innerText;
let i = 0;

subtitle.innerText = '';

function typeWriter() {
  if (i < text.length) {
    subtitle.innerText += text.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}

window.onload = typeWriter;
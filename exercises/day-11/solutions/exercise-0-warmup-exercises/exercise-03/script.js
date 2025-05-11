document.addEventListener('DOMContentLoaded', () => {
  const img = document.getElementById('hero');
  const oldSrc = img.src;
  img.src = 'alt.jpg';
  img.alt = 'Alternative hero image';
  console.log(`Swapped image from ${oldSrc} to ${img.src}`);
});
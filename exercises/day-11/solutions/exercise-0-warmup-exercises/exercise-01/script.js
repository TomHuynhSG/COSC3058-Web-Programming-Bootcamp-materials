document.addEventListener('DOMContentLoaded', () => {
  const title = document.querySelector('#page-title');
  setTimeout(() => title.style.color = 'tomato', 1000);
  console.log(title);
});
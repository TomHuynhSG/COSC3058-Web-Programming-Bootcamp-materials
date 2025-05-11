document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.tasks li');
  console.log(`There are ${items.length} tasks`);
  items.forEach((li, idx) => {
    if (idx % 2 === 1) {
      li.style.backgroundColor = '#f0f0f0';
    }
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('theme-toggle');
  const setLabel = () => {
    if (document.body.classList.contains('dark')) {
      button.textContent = '☀ Light Mode';
    } else {
      button.textContent = '🌙 Dark Mode';
    }
  };
  button.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    setLabel();
  });
  setLabel();
});
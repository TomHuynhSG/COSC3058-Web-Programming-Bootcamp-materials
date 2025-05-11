document.addEventListener('DOMContentLoaded', () => {
  const textarea = document.getElementById('tweet');
  const counter = document.getElementById('counter');
  const update = () => {
    const len = textarea.value.length;
    counter.textContent = `${len}/280`;
    if (280 - len <= 20) {
      counter.style.color = 'red';
    } else {
      counter.style.color = '';
    }
  };
  textarea.addEventListener('input', update);
  update();
});
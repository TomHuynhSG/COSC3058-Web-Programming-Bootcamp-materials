document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('item-input');
  const btn = document.getElementById('add-btn');
  const ul = document.getElementById('shopping');
  const addItem = () => {
    const text = input.value.trim();
    if (!text) return;
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
    input.value = '';
    input.focus();
  };
  btn.addEventListener('click', addItem);
  input.addEventListener('keypress', e => {
    if (e.key === 'Enter') addItem();
  });
});
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.question').forEach(q => {
    q.addEventListener('click', () => {
      const answer = q.nextElementSibling;
      document.querySelectorAll('.answer.show').forEach(a => {
        if (a !== answer) a.classList.remove('show');
      });
      answer.classList.toggle('show');
    });
  });
});
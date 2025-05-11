document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', (e) => {
    if (e.target.matches('.dismiss')) {
      const card = e.target.closest('.card');
      card.remove();
      if (document.querySelectorAll('.card').length === 0) {
        alert('No more announcements 🎉');
      }
    }
  });
});
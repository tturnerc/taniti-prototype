
document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.dataset.page;
  document.querySelectorAll('nav a').forEach(a => {
    if (a.dataset.page === page) a.classList.add('active');
  });
});

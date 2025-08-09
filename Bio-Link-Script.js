const toggleBtn = document.getElementById('themeToggle');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  
  // Toggle icon
  if (document.body.classList.contains('dark')) {
    toggleBtn.textContent = '☀️';
  } else {
    toggleBtn.textContent = '🌙';
  }

});

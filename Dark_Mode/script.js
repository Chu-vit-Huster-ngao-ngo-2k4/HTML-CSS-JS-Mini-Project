const darkMode = document.getElementById('dark-mode');

darkMode.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        darkMode.innerText = 'OFF';
    } else {
        darkMode.innerText = 'ON';
    }
});
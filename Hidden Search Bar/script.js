const search = document.querySelector('.search');
const btn = document.querySelector('.submit');


btn.addEventListener('click', () => {
  search.classList.toggle('show-search');
  search.focus();
});
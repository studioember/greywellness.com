const menu = document.querySelector('.site-menu');
const summary = menu.querySelector('summary');

document.addEventListener('click', (event) => {
  if (menu.open && !menu.contains(event.target)) menu.open = false;
});

document.addEventListener('focusin', (event) => {
  if (menu.open && !menu.contains(event.target)) menu.open = false;
});

menu.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menu.open) {
    menu.open = false;
    summary.focus();
  }
});

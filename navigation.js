const navigation = document.querySelector('.navigation');
const toggle = navigation.querySelector('summary');

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation.open) {
    navigation.open = false;
    toggle.focus();
  }
});

document.addEventListener('click', event => {
  if (!navigation.contains(event.target)) navigation.open = false;
});

navigation.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => { navigation.open = false; });
});

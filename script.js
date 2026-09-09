(() => {
  const menuButton = document.querySelector('[data-menu-toggle]');
  const navigation = document.querySelector('#site-navigation');
  const header = navigation?.closest('header');

  if (!menuButton || !navigation || !header) {
    return;
  }

  const setOpen = (isOpen) => {
    menuButton.setAttribute('aria-expanded', String(isOpen));
    header.toggleAttribute('data-open', isOpen);
  };

  header.classList.add('js-enabled');
  setOpen(false);

  menuButton.addEventListener('click', () => {
    setOpen(menuButton.getAttribute('aria-expanded') !== 'true');
  });

  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setOpen(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      menuButton.focus();
    }
  });
})();

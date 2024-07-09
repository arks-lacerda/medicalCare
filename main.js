window.onload = function () {
  const menuMobile = document.querySelector('.menuMobile');
  const menu = document.querySelector('header nav ul');

  menuMobile.addEventListener('click', function () {
    const computedStyle = window.getComputedStyle(menu);

    if (computedStyle.display === 'none') {
      menu.style.display = 'flex';
    } else {
      menu.style.display = 'none';
      location.reload();
    }
  });
};

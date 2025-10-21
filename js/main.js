function changeScreen(newscreen) {
  const screens = document.querySelectorAll('.screen');

  screens.forEach((el, index) => {
    el.classList.toggle('shown', index + 1 === newscreen);
    el.classList.toggle('hidden', index + 1 !== newscreen);
  });
}
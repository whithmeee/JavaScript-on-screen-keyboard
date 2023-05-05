(function () {
  let textarea = document.querySelector('#textarea');
  let keyboards = document.querySelectorAll('#keyboard .elem1');
  let back = document.querySelector('.back');
  let capse = document.querySelector('.capse');
  let space = document.querySelector('.space');

  for (let keyboard of keyboards) {
    keyboard.addEventListener('click', function (e) {
      textarea.value += e.target.textContent;
    });

    capse.addEventListener('click', function () {
      let transform = keyboard.textContent;
      keyboard.textContent = transform.toUpperCase();
      if (keyboard.textContent == transform) {
        keyboard.textContent = keyboard.textContent.toLowerCase();
      } else {
        keyboard.textContent = keyboard.textContent.toUpperCase();
      }
    });
  }
  space.addEventListener('click', function () {
    textarea.value += ' ';
  });

  back.addEventListener('click', function (e) {
    e.preventDefault();
    textarea.value = '';
  });
})();

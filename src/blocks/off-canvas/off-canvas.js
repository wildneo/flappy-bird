import { default as ready } from '../../js/utils/ready';

ready(() => {
  document.addEventListener('click', (event) => {
    // Показать/скрыть боковое меню
    if(event.target.dataset.toggle === 'off-canvas') {
      event.preventDefault();
      toggleClassById('off-canvas', 'open');
      toggleClassById('burger', 'active');
    }
    // Показать/скрыть боковое меню и перейти на якорь
    if(event.target.dataset.toggleNative === 'off-canvas') {
      toggleClassById('off-canvas', 'open');
      toggleClassById('burger', 'active');
    }
  })
});

// Выбирает элемент с id 'off-canvas' и добавляет, иначе - убирает класс 'open'
function toggleClassById(id, className) {
  document.getElementById(id).classList.toggle(className)
};

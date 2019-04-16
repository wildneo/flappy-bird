import { default as ready } from '../../js/utils/ready';
import '../../js/polyfills/nodeList-forEach-ie11-polyfill';

ready(() => {
  const links = document.querySelectorAll('[href^="#"][data-scroll-link]');
  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      const hash = link.href.replace(/[^#]*(.*)/, '$1');
      if (hash && hash !== '#') {
        event.preventDefault();
        var scroll = window.pageYOffset;
        var targetTop = getOffsetRect(document.querySelector(hash)).top - 10;
        var scrollDiff = (scroll - targetTop) * -1;
        animate({
          duration: 500,
          timing: function(timeFraction) {
            return Math.pow(timeFraction, 2); // https://learn.javascript.ru/js-animation
          },
          draw: function(progress) {
            var scrollNow = scroll + progress * scrollDiff;
            window.scrollTo(0,scrollNow);
          }
        })
      }
    })
  })
});

function animate(_ref) {
  const start = performance.now();
  const timing = _ref.timing;
  const draw = _ref.draw;
  const duration = _ref.duration;
  requestAnimationFrame(function animate(time) {
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;
    const progress = timing(timeFraction);
    draw(progress);
    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  })
};

function getOffsetRect(elem) {
  var box = elem.getBoundingClientRect()
  var body = document.body
  var docElem = document.documentElement
  var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop
  var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft
  var clientTop = docElem.clientTop || body.clientTop || 0
  var clientLeft = docElem.clientLeft || body.clientLeft || 0
  var top  = box.top +  scrollTop - clientTop
  var left = box.left + scrollLeft - clientLeft
  return { top: Math.round(top), left: Math.round(left) }
};

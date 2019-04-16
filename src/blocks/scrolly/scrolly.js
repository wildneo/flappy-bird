import { default as ready } from '../../js/utils/ready';
import '../../js/polyfills/nodeList-forEach-ie11-polyfill';

ready(() => {
  const sections = document.querySelectorAll('.section');

  const scrollToggle = (sectionId) => {
    const pageOffset = window.pageYOffset + 100;
    const section = document.getElementById(sectionId);
    const sectionBox = getCoords(section);
    const sectionlink = document.querySelector(`[href='#${sectionId}'][data-scroll-link]`);
    if (sectionlink) {
      pageOffset > sectionBox.top && pageOffset < sectionBox.btm
      ? sectionlink.parentNode.classList.add('active')
      : sectionlink.parentNode.classList.remove('active');
    }
  };

  window.onscroll = () => {
    sections.forEach((section) => {
        scrollToggle(section.id);
    })
  };
});

function getCoords(element) {
  const box = element.getBoundingClientRect();
  return {
     top: Math.round(box.top + pageYOffset),
     btm: Math.round(box.bottom + pageYOffset)
  }
};

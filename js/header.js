const header = document.querySelector('.header_bg-grey');
let lastScroll = 0;
const defaultOffset = 200;

const scrollPosition = () =>
  window.pageYOffset || document.documentElement.scrollTop;

const hasHide = () => header.classList.contains('hide');

window.addEventListener('scroll', () => {
  if (scrollPosition() > lastScroll && !hasHide() && scrollPosition() > defaultOffset) {
    header.classList.add('hide')
  } else if (scrollPosition() < lastScroll && hasHide()) {
    header.classList.remove('hide')
  }
  lastScroll = scrollPosition();
});

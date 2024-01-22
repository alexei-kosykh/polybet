const roadmap = document.querySelector('.section__roadmap_plan');

let lastKnownScrollPosition = 0;
let ticking = false;

// roadmap.addEventListener('scroll', (event) => {

// window.scrollBy(window.pageYOffset, -100)
// });

function doSomething(scrollPos) {
  roadmap.scrollLeft += 1;
}

roadmap.addEventListener('scroll', (event) => {
  // lastKnownScrollPosition = window.scrollY;
  // console.log(roadmap.scrollLeft);
  // console.log(event.offsetLeft);

  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      doSomething(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});

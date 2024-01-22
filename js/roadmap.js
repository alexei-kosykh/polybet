const roadmap = document.querySelector('.section__roadmap_plan');

let lastKnownScrollPosition = 0;
let ticking = false;

// function doSomething() {
//   setTimeout(() => {
//     roadmap.scrollLeft += (roadmap.scrollWidth / 6) * 1;
//   }, 1000);
// }

roadmap.addEventListener('scroll', (event) => {
  // lastKnownScrollPosition = window.scrollY;
  // console.log((window.scrollY / 6) * 2);
  // console.log(roadmap.scrollLeft);
  // console.log(lastKnownScrollPosition);
  // console.log((roadmap.scrollWidth / 6) * 1);
  // doSomething();

  // console.log(lastKnownScrollPosition);
  // console.log(window.scrollY);
  // console.log(1);
  // window.requestAnimationFrame(() => {
  //   doSomething(lastKnownScrollPosition);
  // });
});

// roadmap.onscroll = (event) => {
//   console.log(1);
// };

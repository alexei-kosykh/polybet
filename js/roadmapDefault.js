// scroll default
const container = document.getElementById('plan');
const middle = container.children[2];

container.scrollTo(middle.offsetLeft, 0);

// navigation circles
let middleWidth = middle.offsetLeft / 2;
let indexItem = 2;
let lastIndex = 1;
let scrolled = true;
const navCircles = document.querySelectorAll('.section__roadmap_nav span');

const addOneActive = (el, i) => {
  el.classList.add('active');
  lastIndex = i;
};

const removeAllActive = () => {
  navCircles.forEach((el) => {
    if (el.classList.contains('active')) {
      el.classList.remove('active');
    }
  });
};

const toggler = (e, i) => {
  removeAllActive();
  addOneActive(e.target, i);
  container.scrollTo(i * middleWidth, 0);
};

navCircles.forEach((el, index) => {
  el.addEventListener('click', (e) => toggler(e, index));
});

const getNewRoad = () => {
  middleWidth = middle.offsetLeft / 2;
  indexItem = container.scrollLeft / middleWidth;
  const round = getDecimalPoint(indexItem, container.scrollLeft);

  if (scrolled && ((round < 10 && round >= 7) || (round > 0 && round <= 2))) {
    if (indexItem - lastIndex > 0) {
      indexItem =
        lastIndex === navCircles.length ? navCircles.length : lastIndex + 1;
    } else if (indexItem - lastIndex < 0) {
      indexItem = lastIndex === 0 ? 0 : lastIndex - 1;
    }

    scrolled = false;

    removeAllActive();
    addOneActive(navCircles[indexItem], indexItem);
  }

  if (!round) {
    scrolled = true;
    indexItem = Math.round(indexItem);
    removeAllActive();
    addOneActive(navCircles[indexItem], indexItem);
  }
};

container.addEventListener('scroll', () => {
  getNewRoad();
});

function getDecimalPoint(index, divider) {
  return +((index % divider).toFixed(1) + '').split('.')[1] || 0;
}

window.addEventListener('resize', (e) => {
  getNewRoad();
});

// Scroll height

// const arrayInfo = [
//   ``,
//   ``,
//   ``,
//   ``,
//   ``,
//   ``,
// ];

// let lastIndex = 2;
// let indexItem = 0;
// let middleWidth = middle.offsetLeft / 2;
// let scrolled = true;
// let mobile = window.innerWidth <= 576;

// container.addEventListener('scroll', onScroll);

// window.addEventListener('resize', (e) => {
//   mobile = window.innerWidth <= 576;
//   if (!mobile) {
//     removeAllElements();
//     addAllElements();
//   } else {
//     middleWidth = container.scrollLeft / 2;
//     container.scrollTo(middle.offsetLeft, 0);
//     removeAllElements();
//     onScroll();
//   }
// });

// function addAllElements() {
//   if (!mobile) {
//     for (let i = 0; i <= arrayInfo.length; i++) {
//       container.children[i]
//         ?.getElementsByClassName('section__roadmap_items')[0]
//         .insertAdjacentHTML('beforeEnd', arrayInfo[i]);
//     }
//   }
// }

// function removeAllElements() {
//   for (let i = 0; i <= arrayInfo.length; i++) {
//     container.children[i]
//       ?.getElementsByClassName('section__roadmap_items')[0]
//       .children[1]?.remove();
//   }
// }

// function generateContent() {
//   if (mobile) {
//     const item = container.children[indexItem]?.getElementsByClassName(
//       'section__roadmap_items'
//     )[0];
//     const previousItem = container.children[lastIndex]?.getElementsByClassName(
//       'section__roadmap_items'
//     )[0];
//     previousItem?.children[1]?.remove();
//     item?.children[1]?.remove();
//     item?.insertAdjacentHTML('beforeEnd', arrayInfo[indexItem]);
//     lastIndex = indexItem;
//   }
// }

// function getDecimalPoint(index, divider) {
//   return +((index % divider).toFixed(1) + '').split('.')[1] || 0;
// }

// function onScroll() {
//   var start = performance.now();
//   indexItem = container.scrollLeft / middleWidth;
//   const round = getDecimalPoint(indexItem, container.scrollLeft);

//   if (scrolled && ((round > 9 && round < 1) || round === 0)) {
//     if (indexItem - lastIndex > 0) {
//       indexItem =
//         lastIndex === arrayInfo.length ? arrayInfo.length : lastIndex + 1;
//     } else if (indexItem - lastIndex < 0) {
//       indexItem = lastIndex === 0 ? 0 : lastIndex - 1;
//     }
//     scrolled = false;

//     generateContent();
//   }

//   if (Number.isInteger(container.scrollLeft / middleWidth)) {
//     scrolled = true;
//     generateContent();
//     //   console.log('Tick 3');
//     //   container.scrollTo(indexItem * middleWidth, 0);

//     //   generateContent();
//   }
//   var end = performance.now();

//   var time = end - start;

//   console.log('Время выполнения = ' + time);
// }

// addAllElements();

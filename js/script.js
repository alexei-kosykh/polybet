function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});

const menuMobIcon = document.getElementById('menu_mob');
const body = document.body;

menuMobIcon.addEventListener('click', () => {
  if (body.classList.contains('open')) {
    closeSidebar();
  } else {
    showSidebar();
  }
});

function showSidebar() {
  body.classList.add('open');
}

function closeSidebar() {
  body.classList.remove('open');
}

const menuLinks = document.querySelectorAll('.menu__item[data-goto]');

if (menuLinks.length > 0) {
  menuLinks.forEach((link) => {
    link.addEventListener('click', onMenuLinkClick);
  });
  function onMenuLinkClick(e) {
    closeSidebar();
    const menuLink = e.target;
    if (
      menuLink.dataset.goto &&
      document.querySelector(menuLink.dataset.goto)
    ) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top + pageYOffset;

      window.scrollTo({
        top: gotoBlockValue,
        behavior: 'smooth',
      });
      e.preventDefault();
    }
  }
}

const plan = document.getElementById('plan');
const one = document.getElementById('case-one');
const two = document.getElementById('case-two');

const func = (box) => {
  let isDown = false;
  let startX;
  let startY;
  let scrollLeft;
  let scrollTop;

  box.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - box.offsetLeft;
    startY = e.pageY - box.offsetTop;
    scrollLeft = box.scrollLeft;
    scrollTop = box.scrollTop;
    box.style.cursor = 'grabbing';
  });

  box.addEventListener('mouseleave', () => {
    isDown = false;
    box.style.cursor = 'grab';
  });

  box.addEventListener('mouseup', () => {
    isDown = false;
    box.style.cursor = 'grab';
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - box.offsetLeft;
    const y = e.pageY - box.offsetTop;
    const walkX = (x - startX) * 1; // Change this number to adjust the scroll speed
    const walkY = (y - startY) * 1; // Change this number to adjust the scroll speed
    box.scrollLeft = scrollLeft - walkX;
    box.scrollTop = scrollTop - walkY;
  });
};

// Dropdown
let dropdowns = document.getElementsByClassName('dropdown-content');
let rotateItems = document.getElementsByClassName('rotate');

function openDropdown() {
  document.getElementById('docsDropdown').classList.toggle('show');
  document.getElementById('docsRotate').classList.toggle('active');
}

window.onclick = function (event) {
  if (
    !event.target.matches('.menu__item_dropdown') &&
    dropdowns[0].classList.contains('show')
  ) {
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        rotateItems[i].classList.remove('active');
      }
    }
  }
};

func(plan);
func(one);
func(two);

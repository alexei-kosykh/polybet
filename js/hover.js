const cards = document.querySelectorAll('.card');

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener('click', highlightThis, true);
}

function toogleLastHover(selector) {
  for (let i = 0; i < cards.length; i++) {
    if (
      cards[i].childNodes[7].classList.contains('hover') &&
      selector !== cards[i].childNodes[7]
    ) {
      cards[i].childNodes[7].classList.remove('hover');
    }
  }
}

function highlightThis() {
  toogleLastHover(this.childNodes[7]);
  this.childNodes[7].classList.toggle('hover');
}

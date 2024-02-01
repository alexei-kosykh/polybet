// scroll default
const container = document.getElementById('plan');
const middle = container.children[2];

middle.scrollIntoView();

// Scroll height

const arrayInfo = [
  `<div><li>
<p class="section__description">Market research</p>
</li>
<li>
<p class="section__description">Team Establishment</p>
</li>
<li>
<p class="section__description">Web 3 core smart contract’s development phase started</p>
</li></div>`,
  `<div><li>
  <p class="section__description">Public Events closed beta development phase</p>
</li>
<li>
  <p class="section__description">Private Events closed beta development phase</p>
</li>
<li>
  <p class="section__description">Oracle functionality closed beta development phase</p>
</li>
<li>
  <p class="section__description">
    Core logic WEB3 smart contracts testnet deployment</p>
</li>
<li>
  <p class="section__description">Sport Events development phase and closed beta launch</p>
</li>
<li>
  <p class="section__description">Establishing ties with Institutions and Funds</p>
</li></div>`,
  `<div>		<li>
<p class="section__description">Token emission $PLBT and $sPLBT</p>
</li>
<li>
<p class="section__description">Vesting Smart contracts</p>
</li>
<li>
<p class="section__description">First sale seed round</p>
</li>
<li>
<p class="section__description">Airdrop and bounty activities</p>
</li>
<li>
<p class="section__description">Core logic WEB3 smart contracts mainnet deployment</p>
</li>
<li>
<p class="section__description">Public Events closed beta test phase</p>
</li>
<li>
<p class="section__description">Private Events closed beta test phase</p>
</li>
<li>
<p class="section__description">Sport Events functionality closed beta test phase</p>
</li>
<li>
<p class="section__description">Reward Pool beta development phase and closed beta test phase</p>
</li>
<li>
<p class="section__description">Cooperation with bloggers and influencers  </p>
</li>
<li>
<p class="section__description">Main sale seed phase</p>
</li>
<li>
<p class="section__description">Company Registration</p>
</li>
<li>
<p class="section__description">Headquarters office</p>
</li>
<li>
<p class="section__description">Gathering potential exchanges listings and partnerships</p>
</li>
<li>
<p class="section__description">A marketing company launch</p>
</li></div>`,
  `<div>	<li>
<p class="section__description">Oracle functionality open beta test phase</p>
</li>
<li>
<p class="section__description">Sport Events functionality open beta test phase</p>
</li>
<li>
<p class="section__description">Private Events open beta test phase</p>
</li>
<li>
<p class="section__description">Public Events open beta test phase</p>
</li>
<li>
<p class="section__description">Cryptocurrency Exchange listings</p>
</li>
<li>
<p class="section__description">Platform Launch</p>
</li></div>`,
  `<div>	<li>
<p class="section__description">WEB3 Games beta developments phase</p>
</li>
<li>
<p class="section__description">WEB3 Lottery beta development phase</p>
</li>
<li>
<p class="section__description">Expanding the world markets (Asia, Africa, Near East regions)</p>
</li>
<li>
<p class="section__description">White Label offerings (WEB3 Events,Games,Lottery)</p>
</li>
<li>
<p class="section__description">Searching White label partnerships and expanding.</p>
</li>
<li>
<p class="section__description">WEB3 casino beta developments phase</p>
</li></div>`,
  `<div>	<li>
<p class="section__description">WEB3 Games closed beta test phase</p>
</li>
<li>
<p class="section__description">WEB3 Lottery closed beta test phase</p>
</li>
<li>
<p class="section__description">Public events with influencers in terms of Polybet project</p>
</li>
<li>
<p class="section__description">Summing and analyzing project work</p>
</li>
<li>
<p class="section__description">WEB3 casino beta test phase</p>
</li>
<li>
<p class="section__description">Future plans development, roadmap update 2026.</p>
</li></div>`,
];
let lastIndex = 0;
let middleWidth = container.scrollLeft / 2;
let mobile = window.innerWidth <= 576;
container.addEventListener('scroll', onScroll);

window.addEventListener('resize', (e) => {
  mobile = window.innerWidth <= 576;
  // console.log(!mobile);
  if (!mobile) {
    removeAllElements();
    addAllElements();
  } else {
    middleWidth = (container.scrollLeft / 2);
    console.log(lastIndex, 'lastindex')
    middle.scrollIntoView();
    removeAllElements();
    onScroll();
  }
});

function addAllElements() {
  if (!mobile) {
    for (let i = 0; i <= arrayInfo.length; i++) {
      container.children[i]
        ?.getElementsByClassName('section__roadmap_items')[0]
        .insertAdjacentHTML('beforeEnd', arrayInfo[i]);
    }
  }
}

function removeAllElements() {
  for (let i = 0; i <= arrayInfo.length; i++) {
    container.children[i]
      ?.getElementsByClassName('section__roadmap_items')[0]
      .children[1]?.remove();
  }
}

function onScroll() {

  const indexItem = container.scrollLeft / middleWidth;
  console.log(indexItem, 'indexItem');
  console.log(container.scrollLeft , 'container.scrollLeft ');
  console.log(middleWidth, 'middleWidth');
  console.log(container.scrollLeft / 2, 'result');
  if (Number.isInteger(indexItem) && mobile) {
    const item = container.children[indexItem]?.getElementsByClassName(
      'section__roadmap_items'
    )[0];
    const previousItem = container.children[lastIndex]?.getElementsByClassName(
      'section__roadmap_items'
    )[0];
    console.log(!!item.children[1], 'item');
    console.log(!!previousItem.children[1], 'item');
      previousItem?.children[1]?.remove();
      item?.children[1]?.remove();
    item?.insertAdjacentHTML('beforeEnd', arrayInfo[indexItem]);
    lastIndex = indexItem;
  }

}

addAllElements();
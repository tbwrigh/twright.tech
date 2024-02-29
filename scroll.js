const pages = document.querySelectorAll('#page');
const dotsContainer = document.querySelector('#scrollbar');
const pageContainer = document.getElementById("pagecontainer");

// Create a dot for each page
for (let i = 0; i < pages.length; i++) {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  dot.classList.add('tooltip');
  dot.onclick = () => {
    pages[i].scrollIntoView({ behavior: 'smooth' });
  };
  dotsContainer.appendChild(dot);

  if (pages[i].getAttribute('data-pagename') !== null) {
    const tooltip = document.createElement('span');
    tooltip.classList.add('tooltiptext');
    tooltip.textContent = pages[i].getAttribute('data-pagename');
    dot.appendChild(tooltip);  
  }
}

const dots = document.querySelectorAll('.dot');

let onscroll = () => {
  const currentScrollPos = pageContainer.scrollTop;
  pages.forEach((page, index) => {
    const pageTop = page.offsetTop;
    const pageBottom = pageTop + page.offsetHeight;
    if (currentScrollPos >= pageTop && currentScrollPos < pageBottom) {
      dots.forEach((dot, dotIndex) => {
        if (dotIndex === index) {
          dot.classList.add('active');
          dot.style.transform = 'scale(1.5)'; // increase dot size
          dot.childNodes[0].classList.add('tooltip-hidden')
        } else {
          dot.classList.remove('active');
          dot.style.transform = 'scale(1)'; // reset dot size
          dot.childNodes[0].classList.remove('tooltip-hidden')
        }
      });
    }
  });
};

pageContainer.addEventListener('scroll', onscroll);
onscroll();

window.blur();
window.focus();

function getCurrentPageIndex() {
  let pageIndex = 0;
  for (let i = 0; i < dots.length; i++) { 
    if (dots[i].classList.contains('active')) {
      pageIndex = i;
    }
  }
  return pageIndex;
}


document.onkeydown = function (e) {
  if (e.key == 38) {    
    pages[Math.max(getCurrentPageIndex() - 1, 0)].scrollIntoView({ behavior: 'smooth' });
  }

  if (e.key == 40) {
    pages[Math.min(getCurrentPageIndex() + 1, pages.length - 1)].scrollIntoView({ behavior: 'smooth' });
  }
};



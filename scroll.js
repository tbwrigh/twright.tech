const pages = document.querySelectorAll('#page');
const dotsContainer = document.querySelector('#scrollbar');
const pageContainer = document.getElementById("pagecontainer");

// Create a dot for each page
for (let i = 0; i < pages.length; i++) {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  dotsContainer.appendChild(dot);
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
          } else {
            dot.classList.remove('active');
            dot.style.transform = 'scale(1)'; // reset dot size
          }
        });
      }
    });
  };
  
  // Update the active dot and resize dots on scroll
  pageContainer.addEventListener('scroll', onscroll);
  onscroll();
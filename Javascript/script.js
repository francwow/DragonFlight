const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  const overlay = document.querySelector('.overlay');
  const section = document.querySelector('.main-section');

  burger.addEventListener('click', () => {
      //Toggle Nav
    nav.classList.toggle('nav-active');
    
    overlay.classList.toggle('overlay-visible');

      //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .3}s`;
      }
    });
    //Burger Animation
    burger.classList.toggle('toggle');
  });

  //Reset Main Page
  section.addEventListener('click', () => {
    nav.classList.remove('nav-active');
    overlay.classList.remove('overlay-visible');
    burger.classList.remove('toggle');

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } 
    });
  });
}

const accordionSlide = () => {
const acc = document.getElementsByClassName('accordion');  
let i;

  for (i = 0; i < acc.length; i++) {
        //Toggle Active Class
    acc[i].addEventListener('click', function() {
      this.classList.toggle('accordion-active');

      //Toggle Panel
      const panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
}

accordionSlide();
navSlide();
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

const showImage = () => {
  const descOne = document.querySelector('.desc-1');
  const descTwo = document.querySelector('.desc-2');
  const descThree = document.querySelector('.desc-3');
  const descFour = document.querySelector('.desc-4');
  const descFive = document.querySelector('.desc-5');
  const imgOne = document.querySelector('.img-1');
  const imgTwo = document.querySelector('.img-2');
  const imgThree = document.querySelector('.img-3');
  const imgFour = document.querySelector('.img-4');
  const imgFive = document.querySelector('.img-5');

  descOne.addEventListener('click', () => {
    if (descOne.classList[2] === 'accordion-active') {
      imgOne.classList.add('img-show');
    } else {
      imgOne.classList.remove('img-show');
    }
    imgTwo.classList.remove('img-show');
    imgThree.classList.remove('img-show');
    imgFour.classList.remove('img-show');
    imgFive.classList.remove('img-show');
  });

  descTwo.addEventListener('click', () => {
    if (descTwo.classList[2] === 'accordion-active') {
      imgTwo.classList.add('img-show');
    } else {
      imgTwo.classList.remove('img-show');
    }
    imgOne.classList.remove('img-show');
    imgThree.classList.remove('img-show');
    imgFour.classList.remove('img-show');
    imgFive.classList.remove('img-show');
  });

  descThree.addEventListener('click', () => {
    if (descThree.classList[2] === 'accordion-active') {
      imgThree.classList.add('img-show');
    } else {
      imgThree.classList.remove('img-show');
    }
    imgTwo.classList.remove('img-show');
    imgOne.classList.remove('img-show');
    imgFour.classList.remove('img-show');
    imgFive.classList.remove('img-show');
  });

  descFour.addEventListener('click', () => {
    if (descFour.classList[2] === 'accordion-active') {
      imgFour.classList.add('img-show');
    } else {
      imgFour.classList.remove('img-show');
    }
    imgTwo.classList.remove('img-show');
    imgThree.classList.remove('img-show');
    imgOne.classList.remove('img-show');
    imgFive.classList.remove('img-show');
  });

  descFive.addEventListener('click', () => {
    if (descFive.classList[2] === 'accordion-active') {
      imgFive.classList.add('img-show');
    } else {
      imgFive.classList.remove('img-show');
    }
    imgTwo.classList.remove('img-show');
    imgThree.classList.remove('img-show');
    imgFour.classList.remove('img-show');
    imgOne.classList.remove('img-show');
  });
}


accordionSlide();
navSlide();
showImage();

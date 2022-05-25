let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1
  }    

  if (n < 1) {
    slideIndex = slides.length
  }

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }

  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  slides.item(slideIndex-1).style.display = "grid";  
  dots[slideIndex-1].className += " active";
}


function showMenu() {
    const mobileMenu = document.getElementById('toggleMenu');

    if (mobileMenu.classList.contains('--hidden')) {
        mobileMenu.classList.remove('--hidden');
    } else {
        mobileMenu.classList.add('--hidden');
    }
    
}
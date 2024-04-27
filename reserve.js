
// ---------------------------------
//    --- PRODUCT 02 SLIDESHOW ---
// ---------------------------------

let slideIndexP02 = 1;
showSlidesP02(slideIndexP02);

function plusSlidesP02(n) {
  showSlidesP02(slideIndexP02 += n);
}

function currentSlideP02(n) {
  showSlidesP02(slideIndexP02 = n);
}

function showSlidesP02(n) {
  let i;
  let slides = document.getElementsByClassName("p02SlideShow");
  let dots = document.getElementsByClassName("demoP02");
  if (n > slides.length) {slideIndexP02 = 1}
  if (n < 1) {slideIndexP02 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activeP02", "");
  }
  slides[slideIndexP02-1].style.display = "block";
  dots[slideIndexP02-1].className += " activeP02";
}

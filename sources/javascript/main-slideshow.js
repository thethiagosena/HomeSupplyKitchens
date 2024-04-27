let slideIndex = 1;
mainSlideshow(slideIndex);
// --- MAIN SLIDESHOW ---
// Next/previous controls
function plusSlides(n) {
  mainSlideshow(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  mainSlideshow(slideIndex = n);
}

function mainSlideshow(n) {
  let i;
  let slides = document.getElementsByClassName("mainSlideshow");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";  
}

// --- PRODUCT 01 SLIDESHOW

let slideIndexP01 = 1;
showSlidesP01(slideIndexP01);

function plusSlidesP01(n) {
  showSlidesP01(slideIndexP01 += n);
}

function currentSlideP01(n) {
  showSlidesP01(slideIndexP01 = n);
}

function showSlidesP01(n) {
  let i;
  let slides = document.getElementsByClassName("p01SlideShow");
  let dots = document.getElementsByClassName("demoP01");
  if (n > slides.length) {slideIndexP01 = 1}
  if (n < 1) {slideIndexP01 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activeP01", "");
  }
  slides[slideIndexP01-1].style.display = "block";
  dots[slideIndexP01-1].className += " activeP01";
}

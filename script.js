var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("absolute max-w-[975px] rounded-lg opacity-0");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.opacity = "0";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.opacity = "1";
  setTimeout(showSlides, 3000); // Change image every 8 seconds
}
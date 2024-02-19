// Image Slider //

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("absolute right-1/2 translate-x-1/2 h-auto max-w-3xl rounded-lg opacity-0");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.opacity = "0";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.opacity = "1";
  setTimeout(showSlides, 3000); // Change image every 8 seconds
}

// Navbar // 

document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('nav a');
  const navBurger = document.querySelectorAll('nav div');

  navLinks.forEach(function (navLink) {
    const initialClass = navLink.className;

    window.addEventListener('scroll', function () {
      if (window.scrollY > 500) {
        navLink.className = initialClass + 'bg-black/25 backdrop-blur-xl rounded-lg hidden';
      } else {
        navLink.className = initialClass;
      }
    });
  });
  
  navBurger.forEach(function (navBurger) {
    const initialClass = navBurger.className;

    window.addEventListener('scroll', function () {
      if (this.window.scrollY > 500) {
        navBurger.className = initialClass - 'lg:hidden';
        navBurger.className = initialClass + 'justify-end';
      } else {
        navBurger.className = initialClass;
      }
    });

    window.addEventListener('click', function() {
      if (navLinks.classList.contains("hidden")) {
        navLinks.classList.remove("hidden");
      }
    });
  });
});

// Poster //

const postImage = document.getElementById("post");
const expandButton = document.getElementById("expand-button");
const container = document.getElementById("containerpost");

postImage.addEventListener("click", function() {
    if (postImage.classList.contains("max-h-full")) {
        postImage.classList.remove("max-h-full");
        postImage.classList.add("max-h-96");
        container.style.maxWidth = "300px";
    } else {
        postImage.classList.remove("max-h-96");
        postImage.classList.add("max-h-full");

        // Get the image's width and set the container's width
        const imageWidth = postImage.naturalWidth;
        container.style.maxWidth = `${imageWidth}px`;
    }
});

expandButton.addEventListener("click", function() {
    if (postImage.classList.contains("max-h-full")) {
        postImage.classList.remove("max-h-full");
        postImage.classList.add("max-h-96");
        container.style.maxWidth = "300px";
    } else {
        postImage.classList.remove("max-h-96");
        postImage.classList.add("max-h-full");

        // Get the image's width and set the container's width
        const imageWidth = postImage.naturalWidth;
        container.style.maxWidth = `${imageWidth}px`;
    }
});

// Back to top //

const mybutton = document.getElementById("backtotop");

const scrollFunction = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.classList.remove("hidden");
    } else {
      mybutton.classList.add("hidden");
    }
  };
  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  // When the user clicks on the button, scroll to the top of the document
  mybutton.addEventListener("click", backToTop);
  
  window.addEventListener("scroll", scrollFunction);
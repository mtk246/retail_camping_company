let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

let slideIndex_2 = 1;
showSlides_2(slideIndex_2);

function plusSlides_2(n) {
  showSlides_2((slideIndex_2 += n));
}

function currentSlide_2(n) {
  showSlides_2((slideIndex_2 = n));
}

function showSlides_2(n) {
  let i;
  let slides_2 = document.getElementsByClassName("mySlides_2");
  let dots_2 = document.getElementsByClassName("dot_2");
  if (n > slides_2.length) {
    slideIndex_2 = 1;
  }
  if (n < 1) {
    slideIndex_2 = slides_2.length;
  }
  for (i = 0; i < slides_2.length; i++) {
    slides_2[i].style.display = "none";
  }
  for (i = 0; i < dots_2.length; i++) {
    dots_2[i].className = dots_2[i].className.replace(" active", "");
  }
  slides_2[slideIndex_2 - 1].style.display = "block";
  dots_2[slideIndex_2 - 1].className += " active";
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
